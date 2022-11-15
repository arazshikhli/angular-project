import { Pipe, PipeTransform } from '@angular/core';
import {Drug, DrugService} from "../services/drug.service";

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(drug:Drug[], name:string): Drug[] {
if(!name.trim()){
  return drug
}
  return drug.filter(d=>{
    return d.name.toLowerCase().includes(name.toLowerCase())
  })
  }

}
