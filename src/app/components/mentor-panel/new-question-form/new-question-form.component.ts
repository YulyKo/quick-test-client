import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreatingAnswersListFormComponent } from 'src/app/utils/UI/creating-answers-list-form/creating-answers-list-form.component';

@Component({
  selector: 'app-new-question-form',
  templateUrl: './new-question-form.component.html',
  styleUrls: ['./new-question-form.component.sass']
})
export class NewQuestionFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.maxLength(20),
      ]],
      text: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(200),
      ]],
      time: [''],
      template: [''],
      answerType: ['', [ Validators.required ]],
    });
  }

  ngOnInit(): void {
  }

  @ViewChild(CreatingAnswersListFormComponent) child;

  message: string;

  lor(): void {
    this.message = this.child.message;
    console.log(this.message);
    console.log(this.child);
  }

  onSubmit(): void {
    // console.log(this.form.value);
    this.checkName();
  }

  checkName(): void {
    console.log(this.form.value);
    
    let formNameField = this.form.value.name;
    let textField = this.form.value.text;
    // if (formNameField === '' || textField.length > 20) {
    //   formNameField = textField.slice(0, 20);
    // }
    console.log(textField);
    console.log(formNameField);
  }
}
