import { Answer } from "./Answer.class";

export class Question {
  private id?: string;
  private name: string;
  private text: string;
  private time: number;
  private folderId?: string;
  private template: boolean;  // true - наявний шаблон || false - відсутній шаблон
  private answerType: string; // answerType - в майб Enum
  private created?: Date;
  private updated?: Date;
  private questionAnswers: Answer[];
    
  public get _id(): string {
    return this.id;
  }
  public set _id(value: string) {
    this.id = value;
  }

  public get _name(): string {
    return this.name;
  }
  public set _name(value: string) {
    this.name = value;
  }

  public get _text(): string {
    return this.text;
  }
  public set _text(value: string) {
    this.text = value;
  }

  public get _time(): number {
    return this.time;
  }
  public set _time(value: number) {
    this.time = value;
  }

  public get _folderId(): string {
    return this.folderId;
  }
  public set _folderId(value: string) {
    this.folderId = value;
  }

  public get _template(): boolean {
    return this.template;
  }
  public set _template(value: boolean) {
    this.template = value;
  }

  public get _answerType(): string {
    return this.answerType;
  }
  public set _answerType(value: string) {
    this.answerType = value;
  }

  public get _updated(): Date {
    return this.updated;
  }
  public set _updated(value: Date) {
    this.updated = value;
  }

  public get _created(): Date {
    return this.created;
  }
  public set _created(value: Date) {
    this.created = value;
  }

  public get _answers(): Answer[] {
    return this.questionAnswers;
  }
  public set _answers(value: Answer[]) {
    this.questionAnswers = value;
  }
}
