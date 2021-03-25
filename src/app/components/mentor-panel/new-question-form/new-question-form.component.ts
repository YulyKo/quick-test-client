import { Component, OnInit } from '@angular/core';
import { InputTextComponent } from 'src/app/utils/UI/form-elements/input-text/input-text.component';

@Component({
  selector: 'app-new-question-form',
  templateUrl: './new-question-form.component.html',
  styleUrls: ['./new-question-form.component.sass']
})
export class NewQuestionFormComponent {

  constructor() { }
  inputsAnswersArray = [];

  // ngOnInit(): void {
  //   console.log(this.inputA);
  // }
  private inputA = new InputTextComponent();
  n = 0;
  addInput(): void {
    console.log(this.inputA);
    const MAX_INPUTS_NUMBER = 5;
    this.n < MAX_INPUTS_NUMBER ? this.inputsAnswersArray.push(this.n++) : console.log('більше варіантів нізя');
  }
}
