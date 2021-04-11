import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login.view.html',
  styleUrls: ['../auth-view.sass']
})
export class LoginView implements OnInit {
  // router: Router;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {}

  goToRegisterPage(): void {
    this.router.navigate(['../registration'], {relativeTo: this.route});
  }
}