//import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BuyingService } from './services/buying.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { NextPropertyComponent } from './property/next-property/next-property.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './services/user-service.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';

//import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
//import {Component} from '@angular/core';
//import {ThemePalette} from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartComponent } from './property/cart/cart.component';
//import {  } from '@angular/router';






const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
{path: 'product', component: AddPropertyComponent},
{path: 'mycart', component: CartComponent},
{path: 'propertydetails/:id', component: PropertyDetailComponent},
{path: 'user/login', component: UserLoginComponent},
{path: 'user/register', component: UserRegisterComponent},
{path: '**', component: PropertyListComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyCardComponent,
      NavBarComponent,

      AddPropertyComponent,
      PropertyDetailComponent,
      NextPropertyComponent,
UserLoginComponent,
      UserRegisterComponent,
      CartComponent,



   ],
  imports: [
BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    //Component,
    MatCardModule,
    FlexLayoutModule




  ],
  providers: [
    BuyingService,
    UserServiceService,
    AlertifyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {




}
