import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AmericanVendorComponent } from './american-vendor/american-vendor.component';
import { IndianVendorComponent } from './indian-vendor/indian-vendor.component';
import { MexicanVendorComponent } from './mexican-vendor/mexican-vendor.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

=======
import { OrderComponent } from './order/order.component';
>>>>>>> 47eeacea6ad606962d81099dc740122c29bbf238
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    EmployeeComponent,
    HeaderComponent,
    FooterComponent,
    AmericanVendorComponent,
    IndianVendorComponent,
    MexicanVendorComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule
=======
    NgbModule
>>>>>>> 47eeacea6ad606962d81099dc740122c29bbf238
  ],
  exports: [OrderComponent],
  providers: [],
  bootstrap: [AppComponent,OrderComponent]
})
export class AppModule { }
