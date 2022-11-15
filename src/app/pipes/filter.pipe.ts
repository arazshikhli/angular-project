import { Pipe, PipeTransform } from '@angular/core';
import {Drug} from "../services/drug.service";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(drug:Drug[], isChecked: boolean): Drug[] {
    if(!isChecked){
      return drug
    }
    else{
     return  drug.filter(d=>d.byPrescription===isChecked)
    }
  }

}
