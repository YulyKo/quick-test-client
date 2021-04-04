import { templateSourceUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Answer } from 'src/app/models/Question/Answer';
import { TEMPLATES } from 'src/app/utils/Templates';

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
      idTrueAnswer: [0, [Validators.required]],
      answersArray: this._formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    this.buttonPlus = document.getElementById('plusButton') as HTMLButtonElement;
  }

  public get answers(): FormArray {
    return this.answersForm.get('answersArray') as FormArray;
  };

  public get answersControls(): Array<FormControl> {
    return this.answers.controls as Array<FormControl>;
  }

  newAnswer(answer: Answer): FormGroup {
    return this._formBuilder.group({
      name: answer.name || 'Текст відповіді',
      isTrue: answer.isTrue || false,
      id: this.answers.length,
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

  public switchTemplateByType(typeName: string): void {
    this.clearAnswersArray();
    // треба цей if оптимізувати
    // що я можу зробити: 
    //  1. винести в окрему ф-цію із swith || if/else
    //  2. витягувати дані із класу Templates - вся логіка із додванням елементів форми підв'язана у цьому класі
    // -------- //
    // а ще треба вирішити за яким критерієм я буду перевіряти чому рівне typeName ібо рядків замало.
    // Це потрібно опитимізувати

    this.setFormElementsByTypeName(typeName);
  }

  setFormElementsByTypeName(typeName: string) {
    const templates = TEMPLATES;
    templates.forEach((template) => {
      if (template.name === typeName) {
        this.blockInputs();
        this.hidePlusButton();
        this.addAnswer(template.value1, true);
        this.addAnswer(template.value2, false);
      } else {
        this.unblockInputs();
        this.showPlusButton();
      }
    });
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
    this.answersForm.controls.answersArray = this._formBuilder.array([]);
  }
}
