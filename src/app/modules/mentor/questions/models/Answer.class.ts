export class Answer {
  private _id?: string;
  private _name: string;
  private _isTrue: boolean = false;
  private _created?: Date;
  private _updated?: Date;

  constructor(defaultName: string, defaultIsTrue: boolean) {
    this.name = defaultName;
    this.isTrue = defaultIsTrue;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get isTrue(): boolean {
    return this._isTrue;
  }
  public set isTrue(value: boolean) {
    this._isTrue = value;
  }
}
