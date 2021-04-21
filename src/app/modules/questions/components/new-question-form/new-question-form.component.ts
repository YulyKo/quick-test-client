import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Patterns } from 'src/app/utils/Patterns.enum';
import { ErrorsMessages } from 'src/app/utils/ErrorsMessages.enum.';
import { CreatingAnswersListFormComponent } from '../creating-answers-list-form/creating-answers-list-form.component';
import { TEMPLATES } from '../../models/Templates.const';
import { Question } from '../../models/Question.class';
import { QuestionTime } from '../../models/QuestionTime.enum';
import { QuestionService } from '../../question.service';
import { Templates } from '../../models/Templates.enum';
import { AnswerTypes } from '../../models/AnswerTypes.enum';
import { Router, ActivatedRoute } from '@angular/router';

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
  timesEnum = QuestionTime;
  ERRORS = ErrorsMessages;
  submited = false;
  folderId: string;
  constructor(
    private questionService: QuestionService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.maxLength(20),
        Validators.minLength(2),
        Validators.pattern(Patterns.QUESTION_NAME_PATTERN),
      ]),
      text: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.pattern(Patterns.QUESTION_NAME_PATTERN),
          Validators.minLength(2),
          Validators.maxLength(200),
        ])
      ),
      time: new FormControl(0, Validators.compose([
        Validators.required,
      ])),
      template: new FormControl('', Validators.required),
    });
    this.question = new Question();
    this.form.patchValue({time: this.timesEnum['15сек']});
    console.log(this.form.value);
  }

  ngOnInit(): void {
    this.folderId = this.activateRoute.snapshot.params.id;
  }

  changeTemplate(): void {
    this.child.changeTemplate(this.form.value.template);
  }

  onSubmit(): void {
    this.submited = true;
    this.checkErrors();
    console.log(this.question);
  }

  checkErrors(): void {
    const errors = this.form.controls.text.errors;
    errors === null ? this.sendQuestion() : console.log('something wrong');
  }

  sendQuestion(): void {
    this.checkName();
    this.setQuesion();
    this.questionService.postQuestion(this.question);
    this.redirectToFolder();
    // reqest to sevice method post question
  }

  checkName(): void {
    const formNameField = this.form.value.name;
    const textField = this.form.value.text;
    if (formNameField === '') {
      this.setDefaultName(textField);
    }
  }

  setDefaultName(textField: string): void {
    const defaultName = textField.slice(0, 20).toString();
    this.form.patchValue({name: defaultName});
  }

  setAnswerType(): void {} // here changing answers type by template type

  setQuesion(): void {
    this.question._text = this.form.value.text;
    this.question._name = this.form.value.name;
    this.question._template = Templates.BOOLEAN;
    // time 10 - default time for block NaN
    this.question._time = +this.timesEnum[this.form.value.time] || 15;
    this.question._answerType = AnswerTypes.BUTTON;
    this.question._answers = this.child.getAnswers();
  }

  redirectToFolder(): void {
    this.router.navigate(['/home/', this.folderId]);
  }
}
