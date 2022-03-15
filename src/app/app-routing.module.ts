import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountprofileComponent } from './accountprofile/accountprofile.component';
import { AllemployeesComponent } from './allemployees/allemployees.component';
import { CommunicationComponent } from './communication/communication.component';
import { CompanyInfoComponent } from './contact-us/company-info/company-info.component';
import { ContactUsModule } from './contact-us/contact-us.module';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
// import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { DietplansComponent } from './dietplans/dietplans.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { ExerciseplansComponent } from './exerciseplans/exerciseplans.component';
import { ExtraservicesComponent } from './extraservices/extraservices.component';
import { LoginComponent } from './login/login.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { SubscriptionComponent } from './subscription/subscription.component';


const routes: Routes = [
{path:"login",component:LoginComponent},
{path:"dashboard",component:DashboardComponent,
   children:[    
     {path:"dashboard1",component:Dashboard1Component},
     {path:"accountprofile",component:AccountprofileComponent},
     {path:"dietpalns",component:DietplansComponent},
     {path:"exerciseplans",component:ExerciseplansComponent},
     {path:"extraservices",component:ExtraservicesComponent},
     {path:"subscription",component:SubscriptionComponent},
     {path:"createemployee",component:CreateemployeeComponent},
     {path:"allemployees",component:AllemployeesComponent},
     {path:"contact-us",component:CompanyInfoComponent},
     {path:"about-us", loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)},
     {path:"roles", loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule)},
     {path:"empdetails/:id",component:EmpdetailsComponent},
     {path:"communication",component:CommunicationComponent},
     {path:"shopping",component:ShoppingComponent}
   ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
