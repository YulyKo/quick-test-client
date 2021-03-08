import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_API_URL = `${environment.api}/auth`;

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return false;
  }

  // async checkEmail(email: string) {
  //   await this.http.head('https://quick-test-api-v3.herokuapp.com/auth/email/' + email)
  //     .subscribe((responce) => console.log(responce));
  // }

  async register(user: User): Promise<void> {
    await this.http.post(`${this.AUTH_API_URL}/registration`, user)
      .subscribe((res: Response) => {
        console.log(res);
      });
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.AUTH_API_URL}/login`, user);
  }
}
