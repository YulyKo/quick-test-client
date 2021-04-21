import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-test-form',
  templateUrl: './new-test-form.component.html',
  styleUrls: ['./new-test-form.component.sass']
})
export class NewTestFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: '',
      text: '',
      questions: [],
    });
  }

  onSubmit(): void {
    console.log('submited');
    console.log(this.form.value);
  }
}
