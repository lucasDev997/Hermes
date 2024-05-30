import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porcentageValue',
})
export class PorcentageValuePipe implements PipeTransform {

  transform(value: number): string {
    
    return String(value.toFixed(2)).concat('%')
  }

}
