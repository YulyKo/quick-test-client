import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ROOT_FOLDER_NAME } from 'src/app/utils/defaultNames.consts';
import { environment } from 'src/environments/environment';
import { Question } from './models/Question.class';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  QUESTION_API_URL = `${environment.api}/questions`;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  async postQuestion(question: Question): Promise<void> {
    const token = localStorage.getItem('token');
    const autorizationheader = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    await this.http.post<Question>(this.QUESTION_API_URL, question, { headers: autorizationheader }).toPromise();
    // here add function for add new question to static question array.
    // in future we don't need to do get request for get data from backend
  }
}
