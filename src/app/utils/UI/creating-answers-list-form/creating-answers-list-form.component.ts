import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ITemplate } from 'src/app/models/ITemplate';
import { FOR_AGAINST, TRUE_FALSE, YES_NO } from '../../QuestionTemplates';

@Component({
  selector: 'app-creating-answers-list-form',
  templateUrl: './creating-answers-list-form.component.html',
  styleUrls: ['./creating-answers-list-form.component.sass']
})
export class CreatingAnswersListFormComponent implements OnInit {
  // inputsAnswersArray: {
  //   id: number,
  //   value: string,
  //   isTrue: boolean,
  // }[]

  // this.inputsAnswersArray = [
  //   {
  //     id: 0,
  //     value: '',
  //     isTrue: true
  //   },
  //   {
  //     id: 1,
  //     value: '',
  //     isTrue: false,
  //   },
  // ];
  private _message = 'Hola Mundo!';
  private _template: ITemplate;
  inputsNumber = 2;
  buttonPlus: HTMLElement;
  inputDisableStatus: boolean;
  answersForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.answersForm = this._formBuilder.group({
      answersArray: this._formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    this.addAnswer();
    this.addAnswer();
    this.buttonPlus = document.getElementById('plusButton');
  }

  get answers(): FormArray {
    return this.answersForm.get('answersArray') as FormArray;
  };

  addInput(): void {
    console.log('n = ', this.inputsNumber);
    const MAX_INPUTS_NUMBER = 5;
    if (this.inputsNumber <= MAX_INPUTS_NUMBER) { 
      this.addAnswer();
    } else {
      this.hideButtonPlus();
    }
    console.log(this.answersForm);
  }

  newAnswer(): FormGroup {
    return this._formBuilder.group({
      value: '',
      isTrue: false,
    });
  }

  addAnswer(): void {
    this.answers.push(this.newAnswer());
  }

  removeAnswer(id: number): void {
    this.answers.removeAt(id);
  }

  delInput(id: number): void {
    console.log(this.inputsNumber, 'del on');
    if (this.inputsNumber >= 3) {
      this.removeAnswer(id);
      this.inputsNumber -= 1;
    }
  }

  public get message(): string {
    return this._message;
  }
  public set message(value: string) {
    this._message = value;
  }

  public get template(): ITemplate {
    return this._template;
  }
  public set template(value: ITemplate) {
    this._template = value;
  }

  setTemplateByType(typeName: string): void {
    switch (typeName) {
      case 'TRUE_FALSE':
        this.template = TRUE_FALSE;
        // hide button +
        this.hideButtonPlus();
        // set value to inputs by template
        // block inputs
        this.blockInputs();
        break;
      case 'YES_NO':
        this.template = YES_NO;
        this.setTEmplateValueToForm();
        this.hideButtonPlus();
      case 'FOR_AGAINST':
        this.template = FOR_AGAINST;
        this.hideButtonPlus();
      default:
        // show button +
        // set empty value to inputs
        // unblock inputs
        this.showButtonPlus();
        this.unblockInputs();
        break;
    }
  }

  hideButtonPlus(): void {
    this.buttonPlus.style.display = 'none';
  }

  showButtonPlus(): void {
    this.buttonPlus.style.display = 'block';
  }

  blockInputs(): void {
  // this.form.controls['name'].disable();
  }

  unblockInputs(): void {
  // this.form.controls['name'].enable();
  }

  setTEmplateValueToForm(): void {
    // form.value.answer1 = this.template.value1 - or by loop
  }

}
