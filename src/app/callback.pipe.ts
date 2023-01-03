import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'callback',
    pure: false
})
export class CallbackPipe implements PipeTransform {
    transform(records: Array<any>, property:String): any {
        let sortedArray=[];
        if(property != null){
            sortedArray = records.filter(item => item.obtiznost == property);
            console.log(sortedArray);
            return sortedArray;
        }
        else{
            return records;
        }
    }
}
