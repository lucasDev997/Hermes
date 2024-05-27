// abbreviate-number.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviateNumber'
})
export class AbbreviateNumberPipe implements PipeTransform {
  transform(value: number): string | null {
    if (value === null) return null;
    if (value === 0) return '0';

    const absValue = Math.abs(value);
    let abbreviatedValue: string;
    if (absValue >= 1.0e+12) {
      abbreviatedValue = (value / 1.0e+12).toFixed(2) + ' T';
    } else if (absValue >= 1.0e+9) {
      abbreviatedValue = (value / 1.0e+9).toFixed(2) + ' B';
    } else if (absValue >= 1.0e+6) {
      abbreviatedValue = (value / 1.0e+6).toFixed(2) + ' M';
    } else if (absValue >= 1.0e+3) {
      abbreviatedValue = (value / 1.0e+3).toFixed(2) + ' K';
    } else {
      abbreviatedValue = value.toString();
    }

    return abbreviatedValue;
  }
}
