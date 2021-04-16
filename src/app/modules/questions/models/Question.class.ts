import { Answer } from './Answer.class';
import { AnswerTypes } from './AnswerTypes.enum';
import { Templates } from './Templates.enum';

export class Question {
  id?: string;
  name: string;
  text: string;
  time: number;
  folderId?: string;
  template: Templates;  // true - наявний шаблон || false - відсутній шаблон
  answerType: AnswerTypes; // answerType - в майб Enum
  created?: Date;
  updated?: Date;
  questionAnswers: Answer[];

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

  public get _template(): Templates {
    return this.template;
  }
  public set _template(value: Templates) {
    this.template = value;
  }

  public get _answerType(): AnswerTypes {
    return this.answerType;
  }
  public set _answerType(value: AnswerTypes) {
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