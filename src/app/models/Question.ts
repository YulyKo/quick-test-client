export class Question {
  id: string;
  private _name: string;
  text: string;
  time: number;
  folderId: string;
  template: boolean;  // true - наявний шаблон || false - відсутній шаблон
  answerType: string; // answerType - в майб Enum
  created: Date;
  updated: Date;

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}
