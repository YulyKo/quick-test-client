import { File } from './File.class';

export class Folder extends File {
  id?: string;
  name: string;
  color: string;
  folderId: string | void;
}
