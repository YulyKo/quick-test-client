import { Pipe, PipeTransform } from '@angular/core';
import { QuestionTime } from '../modules/mentor/questions/models/QuestionTime.enum';

@Pipe({name: 'TimeFilter'})
export class TimeFilter implements PipeTransform {
  transform(items: QuestionTime): string[] {
    const keys = Object.keys(items);
    return keys.slice(keys.length / 2);
  }
}
