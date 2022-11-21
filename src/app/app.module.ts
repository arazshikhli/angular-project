import { NgModule} from '@angular/core';
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
import {NgxMaskModule} from "ngx-mask";
import {AngularFireModule}from '@angular/fire/compat'
import {environment} from "../environments/environment";
import { LoginComponent } from './components/login/login.component';
import '@angular/common/locales/global/fr';


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
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
