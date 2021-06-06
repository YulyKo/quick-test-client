import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeadersService } from 'src/app/utils/HttpHeadersService/HttpHeaders.service';
import { environment } from 'src/environments/environment';
import { Question } from './models/Question.class';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  QUESTION_API_URL = `${environment.api}/questions`;

  constructor(
    private http: HttpClient,
    private httpHeaders: HttpHeadersService,
  ) { }

  async postQuestion(question: Question): Promise<void> {
    await this.http.post<Question>(this.QUESTION_API_URL, question, { headers: this.httpHeaders.getAuthorizationHeaders() }).toPromise();
    // here add function for add new question to static question array.
    // in future we don't need to do get request for get data from backend
  }
}
