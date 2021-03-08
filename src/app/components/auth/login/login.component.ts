import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  
  constructor(private formBuilder: FormBuilder) {
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

}
