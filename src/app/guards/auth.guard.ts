import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> {

  constructor(private authServise: AuthService) {}

  canDeactivate(
    component: unknown, currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('diactive');
    this.authServise.setLoginStatus(false);
    return this.checkLoginStatus();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authServise.setLoginStatus(true);
      return this.checkLoginStatus();
  }

  checkLoginStatus(): boolean {
    if (this.authServise.getLoginStatus()) {
      return true;
    }
    window.alert('Ти не пройдеш!');
    return false;
  }
}
