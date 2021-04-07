import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'TimeFilter'})
export class TimeFilter implements PipeTransform {
  transform(items: Object) {
    const keys = Object.keys(items);
    return keys.slice(keys.length / 2);
  }
}
