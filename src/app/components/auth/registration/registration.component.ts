import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorsMessages } from 'src/app/utils/ErrorsMessages';
import { Patterns } from 'src/app/utils/Patterns';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: []
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  submited = false;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group(
      {
        name: ['', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20),
            Validators.pattern(Patterns.NAME_PATTERN)
          ]],
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        password: ['', [ 
          Validators.required,
          Validators.pattern(Patterns.PASSWORD_PATTERN) ]],
        repeatPassword: ['', [
          Validators.required,
          Validators.pattern(Patterns.PASSWORD_PATTERN) ]],
      }
    );
   }

  ngOnInit(): void { }

  onSubmit() {
    this.submited = true;
    console.log(this.registrationForm.value);
    console.log(this.registrationForm.controls.name);
  }

  checkErrorOfFields(nameField: AbstractControl): string {
    // const nameField = this.registrationForm.controls.name;
    if (nameField.value === '') {
      return ErrorsMessages.ERROR_MESSAGE_FOR_REQUIRED_FIELD;
    } else if (nameField.status === 'INVALID') {
      console.log('invalid');
      
      return ErrorsMessages.ERROR_MESSAGE_FOR_INVALID_MENTOR_NAME;
    }
    return '';
  }

  // getNameFieldStatus(): string {
  //   return this.registrationForm.controls.name.status;
  // }
  
  // getEmailFieldStatus(): string {
  //   return this.registrationForm.controls.email.status;
  // }

  getPasswordFieldStatus(): string {
    return this.registrationForm.controls.password.status;
  }

  getRepeatPasswordFieldStatus(): string {
    return this.registrationForm.controls.repeatPassword.status;
  }
}
