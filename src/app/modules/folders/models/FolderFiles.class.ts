import { Question } from '../../questions/models/Question.class';
import { Folder } from './Folder.class';

export class FolderFiles {
  questions?: Array<Question>;
  folders?: Array<Folder>;
  tests?: Array<any>;
}
