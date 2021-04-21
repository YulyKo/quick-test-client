import { Question } from "../../questions/models/Question.class";

export class TestEssence {
  name: string;
  text: string;
  questions: Array<string>;
  folderID: string;
  code?: string;
  isOpen?: boolean;
}
