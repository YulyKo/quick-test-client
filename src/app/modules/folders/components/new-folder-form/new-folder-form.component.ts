import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT_FOLDER_NAME, ROOT_FOLDER_NAME, SESSION_PARENT_FOLDER_ID } from 'src/app/utils/defaultNames.consts';
import { ErrorsMessages } from 'src/app/utils/ErrorsMessages.enum.';
import { Patterns } from 'src/app/utils/Patterns.enum';
import { Folder } from '../../models/Folder.class';
import { FolderColor } from '../../models/FolderColor.enum';
import { FolderHttpService } from '../../services/folder.http.service';

@Component({
  selector: 'app-new-folder-form',
  templateUrl: './new-folder-form.component.html',
  styleUrls: ['./new-folder-form.component.sass']
})
export class NewFolderFormComponent implements OnInit {

  form: FormGroup;
  submited = false;

  colors = FolderColor;
  ERRORS = ErrorsMessages;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private folderService: FolderHttpService) {
      this.form = this.formBuilder.group(
      {
        name: [
          DEFAULT_FOLDER_NAME,
          [
            Validators.required,
            Validators.pattern(Patterns.FOLDER_NAME_PATTERN),
            Validators.minLength(2),
            Validators.maxLength(40),
          ]
        ],
        color: ['', [
          Validators.pattern(Patterns.COLOR_PATTERN),
        ]],
      }
    );
  }

  private get formErrors(): string {
    return this.form.status;
  }

  ngOnInit(): void {}

  closeForm(): void {
    console.log('click');
    this.router.navigate(['/home/', ROOT_FOLDER_NAME]);
  }

  onSubmit(): void {
    this.submited = true;
    let folder: Folder;
    if (this.formErrors === 'VALID') {
      folder = this.setFolder();
      this.folderService.postFolder(folder);
      this.closeForm();
    } else {
      console.log(this.formErrors);
    }
  }

  setFolder(): Folder {
    const formValue = this.form.value;
    let folder = new Folder();
    folder.name = formValue.name;
    folder.color = formValue.color;
    this.setParentFolderId(folder);
    return folder;
  }

  setParentFolderId(folder: Folder): void {
    if(this.parentFolderId === '') {
      folder.folderId = this.parentFolderId;
    }
  }

  private get parentFolderId(): string | void {
    let parentId: string;
    this.parentFolderIdFromSession === ROOT_FOLDER_NAME ?
      parentId:
      parentId = this.parentFolderIdFromSession;
    return parentId;
  }

  private get parentFolderIdFromSession(): string {
    return sessionStorage.getItem(SESSION_PARENT_FOLDER_ID);
  }
}
