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

const routes: Routes = [
 {path: '', component: HomeComponent},
 
 {path: 'Employee', component: EmployeeComponent},
 {path: 'Order', component: OrderComponent},
 {path: 'indian-vendor', component: IndianVendorComponent},
 {path: 'american-vendor', component: AmericanVendorComponent},
<<<<<<< HEAD
 {path: 'mexican-vendor', component: MexicanVendorComponent} 
=======
 {path: 'mexican-vendor', component: MexicanVendorComponent},
 {
  path:'adminhome', component:AdminhomeComponent},
  {path: 'adminact', component: AdminactionComponent},
 {path: 'login' , component: LoginComponent},
 {
  path:'profilecar', component:ProfilecardComponent}
>>>>>>> 5e09fb25f972977822ab9ec2b98d824a33463b6e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
