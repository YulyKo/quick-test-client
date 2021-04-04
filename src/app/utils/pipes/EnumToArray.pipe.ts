import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'enumToArray'
})
export class EnumToArray implements PipeTransform {
  transform(data: Object) {
    const keys = Object.keys(data);
    return keys.slice(keys.length / 2);
  }
}
