import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class HttpHeadersService {
  getAuthorizationHeaders(): HttpHeaders {
    const token = localStorage.getItem('qt-token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
}
