import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(records: Array<any>, property:String): any {
    let sortedArray=[];
    if(property != null){
        sortedArray = records.filter(item => item.nazev == property);
        return sortedArray;
    }
    else{
        return records;
    }
  }
}
