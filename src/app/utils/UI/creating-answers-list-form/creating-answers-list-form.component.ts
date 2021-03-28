import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creating-answers-list-form',
  templateUrl: './creating-answers-list-form.component.html',
  styleUrls: ['./creating-answers-list-form.component.sass']
})
export class CreatingAnswersListFormComponent implements OnInit {
  inputsAnswersArray = [0, 1, ];
  message = 'Hola Mundo!';
  inputsNumber = 2;

  constructor() { }

  ngOnInit(): void {}

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
}
