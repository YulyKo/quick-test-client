import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ROOT_FOLDER_NAME } from "src/app/utils/defaultNames.consts";
import { environment } from "src/environments/environment";
import { Folder } from "./models/Folder.class";
import { File } from "./models/File.class";
import { FolderFiles } from "./models/FolderFiles.class";
import { Question } from "../questions/models/Question.class";
import { FileTypes } from "./models/FileTypes.enum";

@Injectable({
  providedIn: 'root',
})
export class FolderService {
  FOLDER_API_URL = `${environment.api}/files`;

  constructor(private http: HttpClient) {}

  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
  files = new FolderFiles();

  generateUrl(id: string): string {
    let url = `${this.FOLDER_API_URL}`;
    id !== ROOT_FOLDER_NAME ? url.concat(`/${id}`) : url = this.FOLDER_API_URL;
    return url;
  }

  fetchFiles(id: string): Promise<FolderFiles> {
    const url = this.generateUrl(id);
    const promise = new Promise(() => {
      this.http.get<FolderFiles>(url, { headers: this.getHeaders() })
        .toPromise()
        .then((res: FolderFiles) => {this.files = res});
    });
    return promise;
  }

  getCommonArrayOfFiles(): Array<File> {
    let rootArray = new Array<File>();
    this.files.folders.forEach((folder: Folder) => {
      folder.type = FileTypes.folder;
      rootArray.push(folder);
    });
    this.files.questions.forEach((question: Question) => {
      question.type = FileTypes.question;
      rootArray.push(question);
    });

    // sorting does not work because .getTime() in undefined
    // created is a string
    return rootArray.sort();
  }

  // private getTime(date?: Date) {
  //   console.log(date);
  //   return date !== null ? date.getTime() : 0;
  // }
}
