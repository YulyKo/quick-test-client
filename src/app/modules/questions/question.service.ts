import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeadersService } from 'src/app/utils/services/http-headers-service/http-headers.service';
import { environment } from 'src/environments/environment';
import { Question } from './models/Question.class';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  QUESTION_API_URL = `${environment.api}/questions`;
  listQuestions: Array<Question>;

  constructor(
    private http: HttpClient,
    private httpHeaders: HttpHeadersService,
  ) { }

  async postQuestion(question: Question): Promise<void> {
    await this.http.post<Question>(this.QUESTION_API_URL, question, { headers: this.httpHeaders.getAuthorizationHeaders() }).toPromise();
    // here add function for add new question to static question array.
    // in future we don't need to do get request for get data from backend
  }

  private fetchQuestions(): Promise<Array<Question>> {
    return new Promise(() => {
      this.http.get<Array<Question>>(
        this.QUESTION_API_URL,
        { headers: this.httpHeaders.getAuthorizationHeaders() }
      ).toPromise()
        .then((res) => this.listQuestions = res);
    });
  }

  getListQuestions(): Array<Question> {
    this.fetchQuestions();
    return this.listQuestions;
  }
}
