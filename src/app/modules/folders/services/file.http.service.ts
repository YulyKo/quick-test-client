import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ROOT_FOLDER_NAME } from 'src/app/utils/defaultNames.consts';
import { environment } from 'src/environments/environment';
import { Folder } from '../models/Folder.class';
import { File } from '../models/File.class';
import { FolderFiles } from '../models/FolderFiles.class';
import { Question } from '../../questions/models/Question.class';
import { FileTypes } from '../models/FileTypes.enum';
import { HttpHeadersService } from 'src/app/utils/HttpHeadersService/HttpHeaders.service';

@Injectable({
  providedIn: 'root',
})
export class FileHTTPService {
  FILE_API_URL = `${environment.api}/files`;
  files: FolderFiles;

  constructor(
    private http: HttpClient,
    private httpHeadersService: HttpHeadersService,
  ) {
    this.files = new FolderFiles();
  }

  generateUrl(id: string): string {
    let url = `${this.FILE_API_URL}`;
    id !== ROOT_FOLDER_NAME ? url.concat(`/${id}`) : url = this.FILE_API_URL;
    return url;
  }

  fetchFiles(id: string): Promise<FolderFiles> {
    const url = this.generateUrl(id);
    const promise = new Promise(() => {
      this.http.get<FolderFiles>(url, { headers: this.httpHeadersService.getAuthorizationHeaders() })
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