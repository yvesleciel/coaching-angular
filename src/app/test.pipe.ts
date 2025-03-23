import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name',
  standalone: true
})
export class TestPipe implements PipeTransform {

  transform(value: any, args: boolean): string {
    const str = value.firstName  + value.lastName;
    if(args) {
      return str.trim().split(/\s+/).reverse().join(' ');
    } else {
      return str;
    }
  }

}
