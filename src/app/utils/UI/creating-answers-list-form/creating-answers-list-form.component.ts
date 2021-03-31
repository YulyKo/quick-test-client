import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ITemplate } from 'src/app/models/ITemplate';
import { FOR_AGAINST, TRUE_FALSE, YES_NO } from '../../QuestionTemplates';

@Component({
  selector: 'app-creating-answers-list-form',
  templateUrl: './creating-answers-list-form.component.html',
  styleUrls: ['./creating-answers-list-form.component.sass']
})
export class CreatingAnswersListFormComponent implements OnInit {
  // private _message = 'Hola Mundo!';
  private _template: ITemplate;
  private _answersForm: FormGroup;
  inputsNumber = 2;
  buttonPlus: HTMLElement;
  inputDisableStatus: boolean;

  constructor(private _formBuilder: FormBuilder) {
    this.answersForm = this._formBuilder.group({
      idTrueAnswer: [0, [Validators.required]],
      answersArray: this._formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    this.addAnswer();
    this.addAnswer();
    this.buttonPlus = document.getElementById('plusButton');
  }

  public get answers(): FormArray {
    return this.answersForm.get('answersArray') as FormArray;
  };

  public get answersControls(): Array<FormControl> {
    return this.answers.controls as Array<FormControl>;
  }

  newAnswer(): FormGroup {
    return this._formBuilder.group({
      value: '',
      id: this.answers.length,
    });
  }

  addAnswer(): void {
    this.answers.push(this.newAnswer());
  }

  removeAnswer(id: number): void {
    this.answers.removeAt(id);
    console.log(this.answers);
    
  }

  delInput(id: number): void {
    this.removeAnswer(id);
  }

  // public get message(): string {
  //   return this._message;
  // }
  // public set message(value: string) {
  //   this._message = value;
  // }

  public get template(): ITemplate {
    return this._template;
  }
  public set template(value: ITemplate) {
    this._template = value;
  }

  public get answersForm(): FormGroup {
    return this._answersForm;
  }
  public set answersForm(value: FormGroup) {
    this._answersForm = value;
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
