import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserProfile } from '../models/user-profile';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { BackendApiIntegrationService, security, ExtendSessionService } from '@shared/aws-integration';
import { SessionStorage } from '../models/session-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userProfile: Observable<UserProfile>;
  private userSubject$: BehaviorSubject<UserProfile>;
  private sessionStorage: SessionStorage;

  constructor(private backendApiIntegrationService: BackendApiIntegrationService) {
    this.userSubject$ = this.login();
    this.userProfile = this.userSubject$.asObservable();
  }

  login() {
    this.sessionStorage = this.getSessionStorage();
    const { loginId, accessToken } = this.sessionStorage;
    return new BehaviorSubject<UserProfile>(new UserProfile(loginId, accessToken));
  }

  public get userProfileValue() {
    return this.userSubject$.value;
  }

  getUserProfile(): any {
    //return of([]);
    const endpoint = security.getByLoginId(this.userSubject$.value.loginId);
    return this.backendApiIntegrationService.getApis(endpoint).pipe(
      map((user: UserProfile) => {
        user.accessToken = this.userSubject$.value.accessToken;
        user.isloggedIn = true;
        this.userSubject$.next(user);
        return user;
      })
    );
  }

  updateAccessTokenAfterRefresh(): void {
    const user = this.userSubject$.getValue();
    user.accessToken = sessionStorage.getItem('accessToken');
    this.userSubject$.next(user);
  }

  getSessionStorage() {
    let loginId = sessionStorage.getItem('loginID');
    let accessToken = sessionStorage.getItem('accessToken');
    const refreshToken = sessionStorage.getItem('refreshToken');

    let expires = sessionStorage.getItem('expires');

    if (!accessToken) {
      accessToken =
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJtX29pZCI6IjU3NjQ2MDc1MjMwNDIwNDUyNDkiLCJ1c2VyX25hbWUiOiJ6YWNrc2FjY3QiLCJzY29wZSI6WyJ0b2tlbjpqd3Rfbm9kZSJdLCJleHAiOjE2MzI5NDEyNzIsImp0aSI6IjZiODIwZDA5LTYwYjctNDNkMC1iMWY1LTBiMGI4MTljMjI5ZCIsImVtYWlsIjoiYWR2aXNvckBmb2xpb2ZuLmNvbSIsImNsaWVudF9pZCI6ImZvbGlvSW5zdGl0dXRpb25hbCJ9.deAdRjrMAhXmlh2q0h3zLRTidLgcbXVJn9WZAtDFawRa_B1yRnq7OkaskV4QrPbPt8li9sw1FyGI_hnrOYtPdXakOSKokT_21p3lfLB26D4dCE0ZIW4-rZrR5SGpqQBrEj8eZivRCteRHn9sTrP2EQDX2FXgnXVOmH51LEu0RKYEf9-HPAOmYXpKWupbA79ckAku0fW-AbddniJpp_UaqsFi64EoXj7kqXpxCAnPCc7o8IFzk3gEVU9PG-2_vc0DbhZUNbo0VgmiNLf_R4ZTDgetc0ABAr35UBrCgsPrGLhvlsIQZ_nb7Jq4IKY9J6Lr38KNawDdX02Mkk-l3Z7KYA';
      loginId = 'zacksacct';
      expires = '300';
    }
    return { loginId, accessToken, refreshToken, expires };
  }

  public setSessionStorage(data) {
    sessionStorage.setItem('accessToken', data.access_token);
    sessionStorage.setItem('refreshToken', data.refresh_token);
    sessionStorage.setItem('expires', data.expires_in);
  }
}
