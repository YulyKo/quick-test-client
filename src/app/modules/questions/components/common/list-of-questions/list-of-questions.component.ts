import { Component, OnInit } from "@angular/core";
import { SelectedQuestionService } from "src/app/utils/services/selected-elements-services/selected-question.service";
import { Question } from "../../../models/Question.class";
import { QuestionService } from "../../../question.service";

@Component({
  selector: 'app-list-of-questions',
  templateUrl:'./list-of-questions.component.html',
  styleUrls: ['./list-of-questions.component.sass']
})
export class ListOfQuestionsComponent implements OnInit {
  private listQuestions: Array<Question>;

  public get questions(): Array<Question> {
    return this.listQuestions;
  }

  constructor(
    private questionService: QuestionService,
    private selectedQS: SelectedQuestionService,
  ) {}

  selectQuestion(id: string): void {
    this.selectedQS.pushIDs(id);
  }

  ngOnInit(): void {
    this.listQuestions = this.questionService.getListQuestions();
  }
}
