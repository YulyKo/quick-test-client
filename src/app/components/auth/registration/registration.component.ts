import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ErrorsMessages } from 'src/app/utils/ErrorsMessages.enum.';
import { Patterns } from 'src/app/utils/Patterns.enum';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: []
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  ERRORS = ErrorsMessages;
  existEmail: boolean;
  submited = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.form = this.formBuilder.group(
      {
        name: ['', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            Validators.pattern(Patterns.NAME_PATTERN)
        ]],
        email: ['', [
          Validators.required,
          Validators.pattern(Patterns.EMAIL_PATTERN)
        ]],
        password: ['', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(Patterns.PASSWORD_PATTERN)
        ]],
        confirmPassword: ['', [
          Validators.required,
        ]],
      },
      {
        validator: this.confirmPasswordValidation('password', 'confirmPassword')
      }
    );
   }

  ngOnInit(): void {  }

  onSubmit(): void {
    this.submited = true;
    const emailValue = this.form.controls.email.value;
    setTimeout(() => {
      this.checkExistingEmail(emailValue);
    }, 1000);

  }

  // true - існує ; false - НЕ існує
  checkExistingEmail(email: string): void {
    this.authService.checkEmail(email)
      .subscribe(
        () => {
          this.existEmail = true;
          if (this.form.status === 'VALID') { this.registerUser(); }
        },
        (error) => {
          error.status === 400 ? this.existEmail = false : console.error(error);
        },
      );
  }

  registerUser(): void {
    setTimeout(() => {
      const user = this.setUserData();
      this.authService.register(user).subscribe(
        () => this.getAccessToken(user),
        (error) => console.error(error)
      );
    }, 1000);
  }

  getAccessToken(user: User): void {
    setTimeout(() => {
      this.authService.login(user).subscribe((res) => {
        user.setAccessToken(res.accessToken);
        this.authService.setLoginStatus(true);
        console.log(user);
        this.router.navigate(['/home']);
      });
    }, 1000);
  }

  setUserData(): User {
    const user = new User();
    user.setName(this.form.value.name);
    user.setPassword(this.form.value.password);
    user.setEmail(this.form.value.email);
    return user;
  }

  // lower magic
  confirmPasswordValidation(controlName: string, matchingControlName: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if ( control.value !== matchingControl.value ) {
        matchingControl.setErrors({ confirmPasswordValidation: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
