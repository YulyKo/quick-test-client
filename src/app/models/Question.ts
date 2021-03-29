export class Question {
  id: string;
  name: string;
  text: string;
  time: number;
  folderId: string;
  template: string;
  answerType: string; // answerType - в майб Enum
  created: Date;
  updated: Date;
}
