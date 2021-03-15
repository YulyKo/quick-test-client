import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern(Patterns.EMAIL_PATTERN)]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(Patterns.PASSWORD_PATTERN)]
      ]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const email = this.form.controls.email.value;
    this.checkExistingEmail(email);
    // якщо пошта існує в базі, вхід доступний
    if (this.form.status === 'VALID' && this.existEmail === true) {
      const user = this.getUser();
      this.loginUser(user);
    }
  }

  loginUser(user: User): void {
    this.authService.login(user)
      .subscribe(
        (res) => {
          user.setAccessToken(res.accessToken);
          this.existUser = true;
        },
        (error) => error.status === 400 ? this.existUser = false : console.error('error')
      );
  }

  getUser(): User {
    const user = new User();
    user.setEmail(this.form.controls.email.value);
    user.setPassword(this.form.controls.password.value);
    return user;
  }

  checkExistingEmail(email: string): void {
    this.authService.checkEmail(email)
      .subscribe(
        () => { this.existEmail = false; },
        (error) => {
          error.status === 400 ? this.existEmail = true : console.error(error);
        },
      );
  }
}