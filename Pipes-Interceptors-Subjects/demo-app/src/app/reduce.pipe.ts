import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  standalone: true
})
export class ReducePipe<T> implements PipeTransform {

  transform(
    array: T[], 
    callBackFn:(acc: T, curr: T) =>  T,
    initialValue: T
): T {
    return array.reduce(callBackFn, initialValue);
  }

}
