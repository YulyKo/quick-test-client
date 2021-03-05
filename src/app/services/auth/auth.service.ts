import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return false;
  }

  // async checkEmail(email: string) {
  //   await this.http.head('https://quick-test-api-v3.herokuapp.com//auth/email/' + email)
  //     .subscribe((responce) => console.log(responce));
  // }
}
