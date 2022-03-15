import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { AccountprofileComponent } from './accountprofile/accountprofile.component';
import { ExerciseplansComponent } from './exerciseplans/exerciseplans.component';
import { DietplansComponent } from './dietplans/dietplans.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ExtraservicesComponent } from './extraservices/extraservices.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { ContactUsModule } from './contact-us/contact-us.module';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { AllemployeesComponent } from './allemployees/allemployees.component';
import { CommunicationComponent } from './communication/communication.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductListComponent } from './shopping/product-list/product-list.component';
import { ProductDetailsComponent } from './shopping/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Dashboard1Component,
    AccountprofileComponent,
    ExerciseplansComponent,
    DietplansComponent,
    SubscriptionComponent,
    ExtraservicesComponent,
    CreateemployeeComponent,
    EmpdetailsComponent,
    AllemployeesComponent,
    ParentComponent,
    ChildComponent,
    CommunicationComponent,
    ShoppingComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ContactUsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
