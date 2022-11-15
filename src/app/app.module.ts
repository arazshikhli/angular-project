import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PartnersComponent } from './components/partners/partners.component';
import { StoreComponent } from './components/store/store.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './pipes/filter.pipe';
import { LicenseComponent } from './components/license/license.component';
import { CartComponent } from './components/cart/cart.component';
import { Filter2Pipe } from './pipes/filter2.pipe';
import { CartPipePipe } from './pipes/cart-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartnersComponent,
    StoreComponent,
    ContactsComponent,
    RegistrationComponent,
    FilterPipe,
    LicenseComponent,
    CartComponent,
    Filter2Pipe,
    CartPipePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
