import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe'
})
export class MiPipePipe implements PipeTransform {

  transform(value: string): unknown {
    if (value.length === 11) {
      const cedulaGroup1 = value.substring(0,3)
      const cedulaGroup2 = value.substring(3,7)
      const cedulaGroup3 = value.substring(10,1)
      return `$(cedulaGroup1)-$(cedulaGroup2)-$(cedulaGroup3)`
    }
    return value.toString()
    return null;
  }

}
