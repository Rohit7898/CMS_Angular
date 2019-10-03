import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AdminhomeComponent} from './adminhome/adminhome.component';
import {ProfilecardComponent} from './profilecard/profilecard.component';
import { EmployeeComponent } from './employee/employee.component';
import { OrderComponent} from './order/order.component';
import { AmericanVendorComponent } from './american-vendor/american-vendor.component';
import { MexicanVendorComponent } from './mexican-vendor/mexican-vendor.component';
import { IndianVendorComponent} from './indian-vendor/indian-vendor.component';
import {LoginComponent} from './login/login.component';
import {AdminactionComponent} from './adminaction/adminaction.component';
import { AmericanProfileComponent } from './american-profile/american-profile.component';
import { MexicanprofileComponent } from './mexicanprofile/mexicanprofile.component';
import { IndianprofileComponent} from './indianprofile/indianprofile.component';

const routes: Routes = [
 {path: '', component: HomeComponent},
 
 {path: 'Employee', component: EmployeeComponent},
 {path: 'Order', component: OrderComponent},
 {path: 'indian-vendor', component: IndianVendorComponent},
 {path: 'american-vendor', component: AmericanVendorComponent},
 {path: 'mexican-vendor', component: MexicanVendorComponent},
 {path: 'indian-profile', component: IndianprofileComponent},
 {path: 'american-profile', component: AmericanProfileComponent},
 {path: 'mexican-profile', component: MexicanprofileComponent},
 {
  path:'adminhome', component:AdminhomeComponent},
  {path: 'adminact', component: AdminactionComponent},
 {path: 'login' , component: LoginComponent},
 {
  path:'profilecar', component:ProfilecardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
