import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Question } from "./models/Question.class";
import { User } from '../../auth/User';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  QUESTION_API_URL = `${environment.api}/questions`
  constructor(private http: HttpClient) { }

  postQuestion(question: Question): void {
    // have not user fron auth.medule
    const token = localStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
    })
    const promise = this.http.post<Question>(this.QUESTION_API_URL, question, { headers: headers }).toPromise();
    console.log(JSON.stringify(promise));
  }
}
