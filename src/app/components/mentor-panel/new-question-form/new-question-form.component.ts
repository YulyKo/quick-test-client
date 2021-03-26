import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatingAnswersListFormComponent } from 'src/app/utils/UI/creating-answers-list-form/creating-answers-list-form.component';

@Component({
  selector: 'app-new-question-form',
  templateUrl: './new-question-form.component.html',
  styleUrls: ['./new-question-form.component.sass']
})
export class NewQuestionFormComponent {

  constructor() { }

  // ngOnInit(): void {
  //   console.log(this.inputA);
  // }

  @ViewChild(CreatingAnswersListFormComponent) child;

  message: string;

  lor(): void {
    this.message = this.child.message;
    console.log(this.message);
    console.log(this.child);
  }
}
