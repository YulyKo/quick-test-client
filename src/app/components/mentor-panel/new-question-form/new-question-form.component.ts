import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  private question: Question;

// TODO формування запиту на бек
// TODO додати валідацію із повідомленнями
// TODO додати стилі

constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.maxLength(20),
        Validators.minLength(2),
        Validators.pattern('[A-zА-яіїйєІЇЙЄ0-9 ?><()/*&%$#-]{2,}'),
      ]),
      text: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.pattern('[A-zА-яіїйєІЇЙЄ0-9 ?><()/*&%$#-]{2,}'),
          Validators.minLength(2),
          Validators.maxLength(200),
        ])
      ),
      time: new FormControl(30, Validators.compose([
        Validators.required,
        Validators.pattern('0-9'),
        Validators.minLength(2),
      ])]),
      template: new FormControl(),
      answerType: new FormControl('', [ Validators.required ]),
    });
    this.question = new Question();
  }

  ngOnInit(): void { }

  changeTemplate(): void {
    this.child.changeTemplate(this.form.value.template);
  }

  onSubmit(): void {
    const ree = this.form.controls.text.errors;
    console.log(ree);
    
    this.checkName();
    this.setQuesion();
    console.log(this.question);
    // call method from service for post data
  }

  checkName(): void {
    let formNameField = this.form.value.name;
    let textField = this.form.value.text;
    if (formNameField === '' || textField.length > 20) {
      this.setDefaultName(textField);
    }
  }

  setDefaultName(textField: string): void {
    const defaultName = textField.slice(0, 20).toString();
    this.form.patchValue({name: defaultName});
  }

  setTemplate(): boolean {
    let status: boolean;
    this.form.value.template === 'Власне' ? status = false : status = true;
    return status;
  }

  setQuesion(): void {
    this.question._text = this.form.value.text;
    this.question._name = this.form.value.name;
    this.question._template = this.setTemplate();
    this.question._time = this.form.value.time;
    this.question._answerType = 'BUTTON';
    this.question._answers = this.child.getAnswers();
  }
}
