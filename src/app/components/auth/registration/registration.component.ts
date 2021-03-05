import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ErrorsMessages } from 'src/app/utils/ErrorsMessages';
import { Patterns } from 'src/app/utils/Patterns';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: []
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  submited = false;

  ERRORS = ErrorsMessages;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
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
          Validators.email
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

  ngOnInit(): void { }

  onSubmit() {
    this.submited = true;
    if (this.form.status === 'VALID') {
      console.log('this.form');
      // http req here
      // check exist emeil
      // this.authService.checkEmail('eeee@eee.ee');
    }
  }

  confirmPasswordValidation(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName];
      if ( control.value !== matchingControl.value ) {
        matchingControl.setErrors({ confirmPasswordValidation: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

}
