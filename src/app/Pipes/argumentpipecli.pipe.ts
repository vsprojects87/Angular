import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'argumentpipecli'
})
export class ArgumentpipecliPipe implements PipeTransform {

  transform(value: string, length : number): unknown {
    // return value.substring(0,length);
    if(!length){
      length=20;
    }
    return value.substring(0,length);
  }

}
