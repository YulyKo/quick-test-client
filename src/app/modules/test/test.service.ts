import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeadersService } from 'src/app/utils/services/http-headers-service/http-headers.service';
import { environment } from 'src/environments/environment';
import { TestEssence } from './models/TestEssence.class';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  TEST_ESSENCE_API_URL = `${environment.api}/tests`;

  constructor(
    private http: HttpClient,
    private httpHeadersService: HttpHeadersService
  ) {}

  async postTest(newTest: TestEssence): Promise<void> {
    await this.http.post<TestEssence>(
      this.TEST_ESSENCE_API_URL, newTest,
      { headers: this.httpHeadersService.getAuthorizationHeaders() }
    ).toPromise();
  }
}
