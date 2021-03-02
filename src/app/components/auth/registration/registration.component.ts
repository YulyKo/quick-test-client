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
  form: FormGroup;

  submited = false;

  ERRORS = ErrorsMessages;

  constructor(private formBuilder: FormBuilder) {
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
          Validators.pattern(Patterns.PASSWORD_PATTERN) ]],
        repeatPassword: ['', [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(Patterns.PASSWORD_PATTERN) ]],
      }
    );
   }

  ngOnInit(): void { }

  onSubmit() {
    this.submited = true;
    console.log(this.form.value);
    console.log(this.form.controls);
  }

}
