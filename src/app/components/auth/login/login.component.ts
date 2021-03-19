import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ErrorsMessages } from 'src/app/utils/ErrorsMessages';
import { Patterns } from 'src/app/utils/Patterns';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  ERRORS = ErrorsMessages;
  existEmail: boolean;
  existUser: boolean;
  submited: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      email: ['email@email.com', [
        Validators.required,
        Validators.pattern(Patterns.EMAIL_PATTERN)]
      ],
      password: ['1qASDFGHJKL', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(Patterns.PASSWORD_PATTERN)]
      ]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.submited = true;
    const email = this.form.controls.email.value;
    this.checkExistingEmail(email);
  }

  loginUser(user: User): void {
    setTimeout(() => {
      this.authService.login(user)
        .subscribe(
          (res) => {
            this.existUser = true;
            user.setAccessToken(res.accessToken);
            this.authService.setLoginStatus(true);
            this.router.navigate(['/home']);
          },
          (error) => +error.status === 400 ? this.existUser = false : console.error('error')
        );
    }, 1000);
  }

  getUser(): User {
    const user = new User();
    user.setEmail(this.form.controls.email.value);
    user.setPassword(this.form.controls.password.value);
    return user;
  }

  checkExistingEmail(email: string): void {
    setTimeout(() => {
      this.authService.checkEmail(email)
        .subscribe(
          () => this.existEmail = false,
          (error) => {
            +error.status === 400 ? this.existEmail = true : console.log(error);
            // пошта існує в базі, вхід доступний
            const user = this.getUser();
            this.loginUser(user);
          },
        );
    }, 1000);
  }
}
