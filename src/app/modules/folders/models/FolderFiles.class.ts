import { Question } from "../../questions/models/Question.class";
import { Folder } from "./Folder.class";

export class FolderFiles {
  questions?: Question[];
  folders?: Folder[];
  tests?: any[];
}