import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'callback',
    pure: false
})
export class CallbackPipe implements PipeTransform {
    transform(records: Array<any>, property:String): any {
        let sortedArray=[];
        if(property != null){
            return records.filter(item => item.obtiznost == property);
        }
        else{
            return records;
        }
    }
}
