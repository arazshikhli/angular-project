import {Component, Input} from '@angular/core';
import {DrugService} from "./services/drug.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  counter=0
  constructor(public drug:DrugService) {

  }

  getSwitch(str:string) {
   this.title=str
  }
}
