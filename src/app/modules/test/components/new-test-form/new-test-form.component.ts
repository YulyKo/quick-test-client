import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ROOT_FOLDER_NAME, SESSION_PARENT_FOLDER_ID } from 'src/app/utils/defaultNames.consts';
import { ErrorsMessages } from 'src/app/utils/enums/ErrorsMessages.enum.';
import { Patterns } from 'src/app/utils/enums/Patterns.enum';
import { SelectedQuestionService } from 'src/app/utils/services/selected-elements-services/selected-question.service';
import { TestEssence } from '../../models/TestEssence.class';

@Component({
  selector: 'app-new-test-form',
  templateUrl: './new-test-form.component.html',
  styleUrls: ['./new-test-form.component.sass']
})
export class NewTestFormComponent {
  form: FormGroup;
  submited = false;

  ERRORS = ErrorsMessages;

  constructor(
    private formBuilder: FormBuilder,
    private selectedQS: SelectedQuestionService,
  ) {
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern(Patterns.TEST_AND_QUESTION_NAME_PATTERN),
      ]],
      text: ['', [
        Validators.required,
        Validators.pattern(Patterns.TEST_AND_QUESTION_NAME_PATTERN),
        Validators.minLength(2),
        Validators.maxLength(200),
      ]],
    });
  }

  public get seletedQTIds(): Array<string> {
    return this.selectedQS.getIDs();
  }

  setTest(): TestEssence {
    let testEssence = new TestEssence();
    testEssence.name = this.form.value.name;
    testEssence.text = this.form.value.text;
    testEssence.questions = this.seletedQTIds;
    this.setParentFolderId(testEssence);
    return testEssence;
  }

  setParentFolderId(test: TestEssence): void {
    if(this.parentFolderId === '') {
      test.folderID = this.parentFolderId;
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

  onSubmit(): void {
    this.submited = true;
    // set selected question ids
    console.log(this.setTest());
  }
}
