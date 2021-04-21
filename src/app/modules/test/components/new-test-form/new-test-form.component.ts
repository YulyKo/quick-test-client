import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorsMessages } from 'src/app/utils/ErrorsMessages.enum.';
import { Patterns } from 'src/app/utils/Patterns.enum';

@Component({
  selector: 'app-new-test-form',
  templateUrl: './new-test-form.component.html',
  styleUrls: ['./new-test-form.component.sass']
})
export class NewTestFormComponent {
  form: FormGroup;
  submited = false;

  ERRORS = ErrorsMessages;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern(Patterns.TEST_AND_QUESTION_NAME_PATTERN),
      ]],
      text: ['', [
        Validators.required,
        Validators.pattern(Patterns.TEST_AND_QUESTION_NAME_PATTERN),
        Validators.minLength(2),
        Validators.maxLength(200),
      ]],
      questions: [[], [Validators.required]],
    });
  }

  onSubmit(): void {
    this.submited = true;
    console.log('submited');
    console.log(this.form.value);
  }
}
