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
import { AcceptComponent} from './accept/accept.component';

const routes: Routes = [
 {path: '', component: HomeComponent},

 {path: 'Employee', component: EmployeeComponent},
 {path: 'Order', component: OrderComponent},
 {path: 'indian-vendor', component: IndianVendorComponent},
 {path: 'american-vendor', component: AmericanVendorComponent},
 {path: 'mexican-vendor', component: MexicanVendorComponent},
 {path:'adminhome', component:AdminhomeComponent},
  {path: 'adminact', component: AdminactionComponent},
 {path: 'login' , component: LoginComponent},
 {path:'profilecar', component:ProfilecardComponent},
 {path: 'request', component: AcceptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
