import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreatingAnswersListFormComponent } from 'src/app/utils/UI/creating-answers-list-form/creating-answers-list-form.component';
import { Question } from 'src/app/models/Question/Question';
import { TEMPLATES } from 'src/app/utils/Templates';

@Component({
  selector: 'app-new-question-form',
  templateUrl: './new-question-form.component.html',
  styleUrls: ['./new-question-form.component.sass']
})
export class NewQuestionFormComponent implements OnInit {
  
  @ViewChild(CreatingAnswersListFormComponent) child;
  // у майбутньому так буде передаватися formGroup for answers

  form: FormGroup;
  templates = TEMPLATES;

// TODO встановлення правильної відповіді
// TODO формування об'єкту для передачі на бек
// TODO set масиву відповідей до головної форми

constructor(
    private formBuilder: FormBuilder,
    private question: Question
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
      template: [{}],
      answerType: ['', [ Validators.required ]],
      answers: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void { }

  changeTemplate(): void {
    this.child.changeTemplate(this.form.value.template);
  }

  onSubmit(): void {
    this.checkName();
    console.log(this.question);
    this.form.controls.answers = this.child.answersForm.controls.answersArray;
    console.log(this.form);
  }

  checkName(): void {
    let formNameField = this.form.value.name;
    let textField = this.form.value.text;
    if (formNameField === '' || textField.length > 20) {
      this.setDefaultName(textField);
    }
  }

  // formNameField записується через клас Question
  setDefaultName(textField: string): void {
    const defaultName = textField.slice(0, 20).toString();
    this.question.name = defaultName;
  }
}
