import { Pipe, PipeTransform } from '@angular/core';
import {Drug} from "../services/drug.service";

@Pipe({
  name: 'cartPipe'
})
export class CartPipePipe implements PipeTransform {

  transform(drug:Drug[]): Drug[] {

    return drug.filter(p=>{
      return p.count>0
    });
  }

}
