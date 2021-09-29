import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // const currentUser = this.authService.currentUserValue;
      const currentUser = '';
      if (currentUser) {
          // check if route is restricted by role
          // if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
          //     // role not authorized so redirect to home page
          //     this.router.navigate(['/']);
          //     return false;
          // }

          // authorized so return true
          return true;
      } else {
        // Call the Identity Server to get the identity of a user logged in
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
  }
}
