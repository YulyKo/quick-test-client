import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'
import { Constants } from 'src/app/utils/constants';

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
            Validators.pattern(Constants.NAME_PATTERN)
          ]],
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        password: ['', [ Validators.pattern(Constants.PASSWORD_PATTERN) ]],
        repeatPassword: ['', [ Validators.pattern(Constants.PASSWORD_PATTERN) ]],
      }
    );
   }

  ngOnInit(): void { }

  onSubmit() {
    this.submited = true;
    console.log(this.registrationForm.controls);
    console.log(this.registrationForm.value);
  }

  getFormControls(): string {
    return this.registrationForm.controls.name.status;
  }
}
