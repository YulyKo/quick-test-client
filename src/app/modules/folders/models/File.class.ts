import { FileTypes } from "./FileTypes.enum";

export class File {
  name: string;
  updated? = new Date();
  created? = new Date();
  type?: FileTypes;
}
