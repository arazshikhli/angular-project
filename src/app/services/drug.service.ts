import { Injectable } from '@angular/core';
export interface DrugCount {
  drug:Drug
  count:number

}
export interface Drug{
  id:number
  name:string
  price:number
  img:string
  byPrescription?:boolean
  count:number
}
@Injectable({
  providedIn: 'root'
})
export class DrugService {
  drug:Drug[]=[{id:0,
    count:0, name:"Vitanin",price:20,img:'https://cdn.shopify.com/s/files/1/0066/7569/3639/products/NM2803L601VITCGUMMIESfront_2e1ab215-1d23-4e1c-a0c6-310d10a60945_1500x.png?v=1659456973',byPrescription:true
  },
    {
     count:0, id:1,name:"Aspirin",price:25,img:'https://www.pharmaciedesteinfort.com/media/catalog/product/cache/cd30c5c2a49353086bf9c7be9820feea/a/s/aspirine-100-mg-30-comprimes-0002.jpg',byPrescription:false
    },
    {count:0,id:2,name:"Angilor",price:33,img:'./assets/drugs/angilor.png',byPrescription:false},
    {count:0,id:3,name:"BromGexin",price:33,img:'assets/drugs/bromgeksin.jpg',byPrescription:false},
    {count:0,id:4,name:"Nurofen",price:33,img:'assets/drugs/nurofen.jpg',byPrescription:true},
    {count:0,id:5,name:"Mezim",price:33,img:'assets/drugs/mezim.png',byPrescription:true},
    {count:0,id:6,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:true},
    {count:0,id:7,name:"Алпразолам",price:5,img:'https://cdn.rigla.ru/media/catalog/product/cache/1e8ef93b9b4867ab9f3538dde2cb3b8a/4/4/4455490-d-9-d-4-d9d42b24c815a7e09b6efce23b13e61e4838becc_4455490.jpg',byPrescription:true},
    {count:0,id:8,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:true},
    {count:0,id:9,name:"Nutrilak",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:true},
    {count:0,id:10,name:"Аксен форте",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:true},
    {count:0,id:11,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:true},
    {count:0,id:12,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:true},
    {count:0,id:13,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:true},
    {count:0,id:14,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:true},
    {count:0,id:15,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:true},
    {count:0,id:16,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:true},
    {count:0,id:17,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:true},
    {count:0,id:18,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:true},
    {count:0,id:19,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:false},
    {count:0,id:20,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:false},
    {count:0,id:21,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:false},
    {count:0,id:22,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:false},
    {count:0,id:23,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:false},
    {count:0,id:24,name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',byPrescription:false},
  ]

  constructor() { }
 public drugCounter():number{
    let count=0
    for (let d of this.drug){
      count+=d.count
    }
    return count
 }
}
