import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Drug, DrugService} from "../../services/drug.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  @Output() onAdd:EventEmitter<string>=new EventEmitter<string>()
 drugName=''
  drugSwitcher=10;
  isChecked=false
  constructor(public myDrug:DrugService) { }
  d1:Drug[]=this.myDrug.drug
  selectedDrug!:Drug[]
  ngOnInit(): void {
  }
  myFunc() {
    this.onAdd.emit(this.drugName)
  }
  buyDrug(index:number) {
    for(let a of this.d1){
      if (a.id===index){
        a.count++;
      }
    }

  }
  ShowMore() {
    this.drugSwitcher=this.drugSwitcher+10
  }

  hideBtn() {

  }
}
