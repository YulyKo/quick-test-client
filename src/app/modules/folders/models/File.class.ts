import { FileTypes } from './FileTypes.enum';

export class File {
  name: string;
  updated?: Date;
  created?: Date;
  type?: FileTypes;
}
