import { Component, OnInit } from '@angular/core';
import { DrugService } from '../../services/drug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(public drugService: DrugService, private router: Router) {}

  ngOnInit(): void {}

  goToStore() {
    this.router.navigate(['/store']);
  }

  CountPlus(index: number) {
    for (let i = 0; i < this.drugService.drugs.length; i++) {
      if (i === index) {
        console.log('I: ', i);
        console.log('Index: ', index);
        this.drugService.drugs[i].count += 1;
      }
    }
  }
  CountMinus(index: number) {
    for (let i = 0; i < this.drugService.drugs.length; i++) {
      if (this.drugService.drugs[i].count != 0) {
        if (i === index) {
          console.log('Minus I: ', i);
          console.log(' Minus Index: ', index);
          this.drugService.drugs[i].count -= 1;
        }
      }
    }
  }
}
