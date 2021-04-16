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

  async getFolderItems(id: string): Promise<File[]> {
    // move out lines 15-18 in same const or smth like this
    const token = localStorage.getItem('token');
    const autorizationheader = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    let url = `${this.FOLDER_API_URL}`;
    id !== ROOT_FOLDER_NAME ? url.concat(`/${id}`) : url = this.FOLDER_API_URL;
    let res = await this.http.get<FolderFiles>(url, { headers: autorizationheader }).toPromise();

    return this.createCommonArrayOfFiles(res);
  }

  createCommonArrayOfFiles(apiFiles: FolderFiles): Array<File> {
    let rootArray = new Array<File>();
    apiFiles.folders.forEach((folder: Folder) => {
      folder.type = FileTypes.folder;
      rootArray.push(folder);
    });
    apiFiles.questions.forEach((question: Question) => {
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
