import { templateSourceUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Answer } from 'src/app/models/Question/Answer';
import { ITemplate, TEMPLATES } from 'src/app/models/Question/Templates';

@Component({
  selector: 'app-creating-answers-list-form',
  templateUrl: './creating-answers-list-form.component.html',
  styleUrls: ['./creating-answers-list-form.component.sass']
})
export class CreatingAnswersListFormComponent implements OnInit {
  private _answersForm: FormGroup;
  buttonPlus: HTMLButtonElement;
  templates = TEMPLATES;

  constructor(private _formBuilder: FormBuilder) {
    this.answersForm = this._formBuilder.group({
      idTrueAnswer: new FormControl(0, [Validators.required]),
      answersArray: new FormArray([]), // FromArray <- FormGroup <- FormControl
    });
  }

  ngOnInit(): void {
    this.buttonPlus = document.getElementById('plusButton') as HTMLButtonElement;
    this.hidePlusButton();
    this.setTrueAnswer(0);
  }

  public get answers(): FormArray {
    return this.answersForm.get('answersArray') as FormArray;
  };

  public get answersControls(): Array<FormGroup> {
    return this.answers.controls as Array<FormGroup>;
  }

  newAnswer(answer: Answer): FormGroup {
    return new FormGroup({
      name: new FormControl(answer.name || 'Текст відповіді'),
      isTrue: new FormControl(answer.isTrue || false),
      id: new FormControl(this.answers.length),
    });
  }

  addAnswer(defaultName: string, defaultIsTrue: boolean): void {
    const answer = new Answer(defaultName, defaultIsTrue);
    this.answers.push(this.newAnswer(answer));
    this.checkPlusButtonVisibility();
  }

  removeAnswer(id: number): void {
    this.answers.removeAt(id);
    this.checkPlusButtonVisibility();
  }

  public get answersForm(): FormGroup {
    return this._answersForm;
  }
  public set answersForm(value: FormGroup) {
    this._answersForm = value;
  }

  public changeTemplate(typeName: string): void {
    this.clearAnswersArray();
    this.setFormElementsByTypeName(typeName);
  }

  setFormElementsByTypeName(typeName: string) {
    const templates = TEMPLATES;
    let temp: ITemplate;
    templates.forEach((template) => {
      if (template.name === typeName) {
        this.addAnswer(template.value1, true);
        this.addAnswer(template.value2, false);
        temp = template;
      }
    });
    this.changeInputsAndButtonsVisibility(temp);
  }

  changeInputsAndButtonsVisibility(temp: ITemplate): void {
    if (temp.value1 === undefined) {
      this.unblockInputs();
      this.showPlusButton();
    } else {
      this.blockInputs();
      this.hidePlusButton();
    }
  }

  blockInputs(): void {
    this.answersControls.forEach((e) => {
      e.disable();
    });
  }

  unblockInputs(): void {
    this.answersControls.forEach((e) => {
      e.enable();
    });
  }

  checkPlusButtonVisibility(): void {
    const MAX_NUMBER_ANSWERS = 5;
    if (this.answersControls.length < MAX_NUMBER_ANSWERS) {
      this.showPlusButton();
    } else this.hidePlusButton();
  }

  hidePlusButton(): void {
    this.buttonPlus.style.display = 'none';
  }

  showPlusButton(): void {
    this.buttonPlus.style.display = 'block';
  }

  clearAnswersArray(): void {
    this.answers.clear();
  }

  setTrueAnswer(id: number): void {
    this.answersControls.forEach((e: FormGroup) => {
      +id === +e.value.id ?
                    e.setValue({isTrue: true, name: e.value.name, id: e.value.id}) :
                    e.setValue({isTrue: false, name: e.value.name, id: e.value.id});
    });
  }

  removeIdFied(): void {
    // remove id field
    this.answers.controls.forEach((element: FormGroup) => {
      element.removeControl('id');
    });
  }

  getAnswers(): Answer[] {
    this.removeIdFied();
    return this.answers.value;
  }
}
