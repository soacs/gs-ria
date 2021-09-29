import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, mergeMap, switchMap, take } from 'rxjs/operators';

import { LoaderService } from '@shared/loader';
import { ExtendSessionService } from '@shared/aws-integration';
import { AuthenticationService } from '../services/authentication.service';
import { SessionStorage } from '../models/session-storage';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  sessionStorage: SessionStorage;
  private refreshingInProgress: boolean;
  private accessTokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private loaderService: LoaderService,
    private extendSessionService: ExtendSessionService,
    private authenticationService: AuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        this.loaderService.hide();
        this.sessionStorage = this.authenticationService.getSessionStorage();
        if ([401].indexOf(err.status) !== -1 && this.sessionStorage.accessToken !== null) {
          return this.refreshToken(request, next, this.sessionStorage);
        }

        if ([403].indexOf(err.status) !== -1) {
          return throwError('Access forbidden');
        }

        if ([502].indexOf(err.status) !== -1) {
          return throwError('Bad Gateway');
        }

        console.log('error ----', err.error);
        return throwError(err.error && err.error.errors);
      })
    );
  }

  private addAuthorizationHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    if (token) {
      return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }

    return request;
  }

  private refreshToken(request: HttpRequest<any>, next: HttpHandler, sessionStorage: SessionStorage): Observable<HttpEvent<any>> {
    if (!this.refreshingInProgress) {
      this.refreshingInProgress = true;
      this.accessTokenSubject.next(null);
      const grantType = 'refresh_token';
      return this.extendSessionService.extendSession(sessionStorage.refreshToken, grantType).pipe(
        mergeMap((res) => {
          this.refreshingInProgress = false;
          this.accessTokenSubject.next(res.access_token);
          this.authenticationService.setSessionStorage(res);
          this.authenticationService.updateAccessTokenAfterRefresh();
          // repeat failed request with new token
          return next.handle(this.addAuthorizationHeader(request, res.access_token));
        })
      );
    } else {
      // wait while getting new token
      return this.accessTokenSubject.pipe(
        filter((token) => token !== null),
        take(1),
        mergeMap((token) => {
          // repeat failed request with new token
          return next.handle(this.addAuthorizationHeader(request, token));
        })
      );
    }
  }
}
