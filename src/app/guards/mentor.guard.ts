import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MentorGuard implements CanActivate, CanDeactivate<unknown> {

  constructor(
    private authServise: AuthService,
    private router: Router,
  ) {}

  canDeactivate(): boolean {
    console.log('diactive');
    return this.authServise.getLoginStatus() === false;
  }

  canActivate(): boolean {
    if (this.authServise.getLoginStatus() === false) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
