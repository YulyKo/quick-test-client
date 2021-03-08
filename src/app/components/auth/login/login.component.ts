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

  constructor(private formBuilder: FormBuilder, private authServce: AuthService) {
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
    const user = this.getUser();
    this.authServce.login(user)
      .subscribe((res) => {
        user.setAccessToken(res.access_token);
        console.log(user);
      });
  }
  
  getUser(): User {
    const user = new User();
    user.setEmail(this.form.controls.email.value);
    user.setPassword(this.form.controls.password.value);
    return user;
  }
}
