import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Answer } from 'src/app/models/Answer';
import { ITemplate } from 'src/app/models/ITemplate';
import { FOR_AGAINST, TRUE_FALSE, YES_NO } from '../../QuestionTemplates';

@Component({
  selector: 'app-creating-answers-list-form',
  templateUrl: './creating-answers-list-form.component.html',
  styleUrls: ['./creating-answers-list-form.component.sass']
})
export class CreatingAnswersListFormComponent implements OnInit {
  inputsAnswersArray = [0, 1, ];
  private _message = 'Hola Mundo!';
  private _template: ITemplate;
  inputsNumber = 2;
  buttonPlus: HTMLElement;
  buttonDel: HTMLElement;
  inputDisableStatus: boolean;
  
  constructor() {}

  ngOnInit(): void {
    this.buttonPlus = document.getElementById('plusButton');
    this.buttonDel = document.getElementById('delButton');
  }

  addInput(): void {
    console.log(this.inputsNumber);
    const MAX_INPUTS_NUMBER = 5;
    this.inputsNumber < MAX_INPUTS_NUMBER ? this.inputsAnswersArray.push(this.inputsNumber++) : console.log('більше варіантів нізя');
  }

  delInput(inputA: number): void {
    console.log(this.inputsNumber, 'del on');

    if (this.inputsNumber >= 3) {
      this.inputsAnswersArray.splice(inputA, 1);
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
        // hide button +
        // hide button del
        // set value to inputs by template
        // block inputs
        this.template = TRUE_FALSE;
        this.hideButtonPlus();
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
  
  hideButtonDel(): void {
    this.buttonDel.style.display = 'none';
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
