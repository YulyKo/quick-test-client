import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DEFAULT_FOLDER_NAME, ROOT_FOLDER_NAME } from 'src/app/utils/defaultNames.consts';
import { ErrorsMessages } from 'src/app/utils/ErrorsMessages.enum.';
import { Patterns } from 'src/app/utils/Patterns.enum';
import { FolderColor } from '../../models/FolderColor.enum';

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
    private formBuilder: FormBuilder) {
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

  ngOnInit(): void {
    console.log(Patterns.FOLDER_NAME_PATTERN);
  }

  closeForm(): void {
    console.log('click');
    this.router.navigate(['/home/', ROOT_FOLDER_NAME]);
  }

  onSubmit(): void {
    this.submited = true;
    this.formErrors === 'VALID' ? this.closeForm() : console.log(this.formErrors);
    console.log(this.form.value);
  }
}
