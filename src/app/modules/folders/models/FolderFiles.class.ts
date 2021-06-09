import { Question } from '../../questions/models/Question.class';
import { TestEssence } from '../../test/models/TestEssence.class';
import { Folder } from './Folder.class';

export class FolderFiles {
  questions?: Array<Question>;
  folders?: Array<Folder>;
  tests?: Array<TestEssence>;
}
