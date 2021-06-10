import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // якщо користувач залогінений, йому НЕ доступн сорінки входу/реєстрації
    // return localStorage.getItem('qt-token') ? true : false;
    return true;
  }
}
