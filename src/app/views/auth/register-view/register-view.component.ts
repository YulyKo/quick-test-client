import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['../auth-view.sass']
})
export class RegisterViewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToLoginPage(): void {
    this.router.navigate(['../login'], {relativeTo: this.route});
  }
}
