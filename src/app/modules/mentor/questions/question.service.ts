import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Question } from "./models/Question.class";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  QUESTION_API_URL = `${environment.api}/questions`;

  constructor(private http: HttpClient) { }

  async postQuestion(question: Question): Promise<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
    });
    await this.http.post<Question>(this.QUESTION_API_URL, question, { headers: headers }).toPromise();
    // here add function for add new question to static question array.
    // in future we don't need to do get request for get data from backend
  }
}
