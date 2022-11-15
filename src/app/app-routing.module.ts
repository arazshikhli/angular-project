import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {StoreComponent} from "./components/store/store.component";
import {LicenseComponent} from "./components/license/license.component";
import {PartnersComponent} from "./components/partners/partners.component";
import {CartComponent} from "./components/cart/cart.component";

const routes: Routes = [  {
  path:'',
  component:HomeComponent
},
  {
    path:'contacts',
    component:ContactsComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'store',
    component:StoreComponent
  },
  {
    path:'license',
    component:LicenseComponent
  },
  {
    path:'partners',
    component:PartnersComponent
  },
  {
    path:'store:id',component:StoreComponent
  },
  {
    path:'cart',component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
