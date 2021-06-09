import { File } from "../../folders/models/File.class";
import { Question } from "../../questions/models/Question.class";

export class TestEssence extends File {
  name: string;
  text: string;
  questions: Array<Question> | Array<string>;
  folderID: string;
  code?: string;
  isOpen?: boolean;
}
