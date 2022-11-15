import { Component, OnInit } from '@angular/core';
import {Drug, DrugService} from "../../services/drug.service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public drug:DrugService) {

  }

  ngOnInit(): void {
  }

}
