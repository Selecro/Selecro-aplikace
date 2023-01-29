import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'premiove',
  pure: false
})
export class PremiovePipe implements PipeTransform {
  transform(records: Array<any>, property:Boolean): any {
    let sortedArray=[];
    if(property == true){
        sortedArray = records.filter(item => item.premiove == property);
        return sortedArray;
    }
    else{
        return records;
    }
  }
}