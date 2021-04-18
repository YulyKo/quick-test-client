import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ROOT_FOLDER_NAME } from 'src/app/utils/defaultNames.consts';
import { environment } from 'src/environments/environment';
import { Folder } from '../models/Folder.class';
import { File } from '../models/File.class';
import { FolderFiles } from '../models/FolderFiles.class';
import { Question } from '../../questions/models/Question.class';
import { FileTypes } from '../models/FileTypes.enum';

@Injectable({
  providedIn: 'root',
})
export class FolderHTTPService {
  FOLDER_API_URL = `${environment.api}/files`;
  files: FolderFiles;

  constructor(private http: HttpClient) {
    this.files = new FolderFiles();
  }

  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

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
      .then((res: FolderFiles) => { this.files = res; });
    });
    return promise;
  }

  getCommonArrayOfFiles(): Array<File> {
    const rootArray = new Array<File>();
    this.files.folders.forEach((folder: Folder) => {
      folder.type = FileTypes.folder;
      folder.created = new Date(folder.created);
      folder.updated = new Date(folder.updated);
      rootArray.push(folder);
    });
    this.files.questions.forEach((question: Question) => {
      question.type = FileTypes.question;
      question.created = new Date(question.created);
      question.updated = new Date(question.updated);
      rootArray.push(question);
    });
    return rootArray;
  }
}
