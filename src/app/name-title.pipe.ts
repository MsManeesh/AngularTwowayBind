import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'nameTitle'
})
export class NameTitlePipe implements PipeTransform {

  transform(value: string, gen: string, sta:string): string {
    if (gen=="male")
      return "Mr. "+value;
    else if(gen=='female'&& sta=="married")
      return "Mrs. "+value;
    else
      return "Ms. "+value;
  }
  

}
@Pipe({
  name:"nameLength"
})
export class NameLengthPipe implements PipeTransform{
  transform(name:string): any{
    return name.length;
  }
}
