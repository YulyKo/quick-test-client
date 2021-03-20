import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // якщо користувач залогінений, йому НЕ доступн сорінки входу/реєстрації
    return this.authService.getLoginStatus() === true ? false : true;
  }
}
