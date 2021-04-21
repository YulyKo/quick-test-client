import { Component, Input } from "@angular/core";
import { Question } from "src/app/modules/questions/models/Question.class";

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.sass'],
})
export class QuestionCardComponent {
  @Input() question: Question;
}
