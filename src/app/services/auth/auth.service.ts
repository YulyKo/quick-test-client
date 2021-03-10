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

  checkEmail(email: string): Observable<object> {
    return this.http.head(`${this.AUTH_API_URL}/email/${email}`);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.AUTH_API_URL}/registration`, user);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.AUTH_API_URL}/login`, user);
  }
}
