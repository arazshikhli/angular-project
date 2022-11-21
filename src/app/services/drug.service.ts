import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface DrugCount {
  drug: Drug;
  count: number;
}
export interface Drug {
  id: number;
  name: string;
  price: number;
  img: string;
  byPrescription?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DrugService {
  public drugs$: BehaviorSubject<DrugCount[]> = [];

  constructor(private httpClient: HttpClient) {}

  public loadDrugs(): void {
    this.httpClient
      .get<Drug[]>('assets/drugs.json')
      .subscribe((drugs: Drug[]) => {
        this.drugs = drugs.map((d) => {
          return {
            drug: d,
            count: 0,
          };
        });
      });
  }

  public setCount(drug: Drug, count: number): void {
    this.drugs$.next();
  }

  public get drugCounter(): number {
    let count = 0;
    for (let d of this.drugs) {
      count += d.count;
    }
    return count;
  }
}
