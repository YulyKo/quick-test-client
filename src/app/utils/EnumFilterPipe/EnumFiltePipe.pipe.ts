import { Pipe, PipeTransform } from '@angular/core';
import { EnumMember } from 'typescript';

@Pipe({name: 'EnumFilter'})
export class EnumFilter implements PipeTransform {
  transform(items: EnumMember): string[] {
    const keys = Object.keys(items);
    return keys.slice(keys.length / 2);
  }
}
