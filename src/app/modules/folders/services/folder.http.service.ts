import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeadersService } from "src/app/utils/services/http-headers-service/http-headers.service";
import { environment } from "src/environments/environment";
import { Folder } from "../models/Folder.class";

@Injectable({
  providedIn: 'root',
})
export class FolderHttpService {
  FOLDER_API_URL = `${environment.api}/folders`;

  constructor(
    private http: HttpClient,
    private httpHeadersService: HttpHeadersService,
  ) {}

  async postFolder(folder: Folder): Promise<void> {
    await this.http.post<Folder>(
        this.FOLDER_API_URL, folder,
        { headers: this.httpHeadersService.getAuthorizationHeaders() }).toPromise();
  }
}
