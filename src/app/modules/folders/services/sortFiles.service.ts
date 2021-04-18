import { Injectable } from '@angular/core';
import { File } from '../models/File.class';

@Injectable({
  providedIn: 'root',
})
export class SortFilesService {

  sortFromNewToOld(rootArray: Array<File>): Array<File> {
    return rootArray.sort((a: File, b: File) => {
      return this.getTime(b.created) - this.getTime(a.created);
    });
  }

  private getTime(date?: Date): number {
    return date !== null ? date.getTime() : 0;
  }
}
