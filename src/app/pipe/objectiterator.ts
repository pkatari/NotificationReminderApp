import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'ObjectIterable'
})
export class ObjectIterable implements PipeTransform {
  transform(obj: Object) {
    var a = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        a.push({key: key, val: obj[key]});
      }
    }
    return a;
  }
}