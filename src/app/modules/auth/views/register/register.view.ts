import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.view.html',
  styleUrls: ['../auth-view.sass']
})
export class RegisterView implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {}

  goToLoginPage(): void {
    this.router.navigate(['../login'], {relativeTo: this.route});
  }
}
