import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeadersService } from "src/app/utils/HttpHeadersService/HttpHeaders.service";
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

  postFolder(folder: Folder): void {
    new Promise(() => {
      this.http.post<Folder>(
        this.FOLDER_API_URL, folder,
        { headers: this.httpHeadersService.getAuthorizationHeaders() });
    }).then().catch((error) => console.error(error));
  }
}
