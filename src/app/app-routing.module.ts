import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { OrderComponent} from './order/order.component'

const routes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'Admin', component: AdminComponent},
 {path: 'Employee', component: EmployeeComponent},
 {path: 'Order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
