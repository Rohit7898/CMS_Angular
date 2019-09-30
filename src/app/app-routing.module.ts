import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { IndianVendorComponent } from './indian-vendor/indian-vendor.component';
import { AmericanVendorComponent } from './american-vendor/american-vendor.component';
import { MexicanVendorComponent } from './mexican-vendor/mexican-vendor.component';


const routes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'Admin', component: AdminComponent},
 {path: 'Employee', component: EmployeeComponent},
 {path: 'Indian-Vendor', component: IndianVendorComponent},
 {path: 'American-Vendor', component: AmericanVendorComponent},
 {path: 'Mexican-Vendor', component: MexicanVendorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
