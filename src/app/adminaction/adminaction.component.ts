import { Component, OnInit } from '@angular/core';
import { AdminactionService } from './adminaction.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminaction',
  templateUrl: './adminaction.component.html',
  styleUrls: ['./adminaction.component.css']
})
export class AdminactionComponent implements OnInit {
  
  adminitem: adminact[];
  errorMsg: any;
  editadmintem: adminact;
  constructor(public adminactService:AdminactionService ) { }

  ngOnInit() {
    this.adminactService.getadminact().subscribe(
      data => this.adminitem = data,
      error => this.errorMsg = error
    );
  }
   
  add(addForm: NgForm): void {
    this.editadmintem = undefined;
    // name = name.trim();
    if (!addForm.value.vendorname) {
      return;
    }
    if (!addForm.value.address) {
      return;
    }
    if (!addForm.value.emailid) {
      return;
    }
    if (!addForm.value.contact) {
      return;
    }
    if (!addForm.value.balance) {
      return;
    }

    

    // The server will generate the id for this new North Indian Item
    // const newNorthItem: NorthVendor = { name, price } as NorthVendor;
    // this.northVendorService.addNorthIndianItem(newNorthItem)
    //   .subscribe(north => {this.northVendors.push(north), console.log(north)},
    //   error => this.errorMsg = error);

    this.adminitem.push(addForm.value);
    console.log(this.adminitem);
    alert("Menu Item: " + addForm.value.vendorname + " Added!");
    addForm.resetForm();


  }
  
  delete(adminacting: adminact): void {
    this.adminitem = this.adminitem.filter(n => n !==adminacting );
    this.adminactService.deleteadminact(adminacting.id).subscribe();
    alert("Menu Item: " + adminacting.vendorname + " Deleted!");
  }

  
  edit(adminacting: adminact){
    this.editadmintem = adminacting;
  }

  update() {

    if (this.editadmintem) {

      this.adminactService.updateadminact(this.editadmintem).subscribe

        (editNorthItem => {

          const nr = this.editadmintem ? this.adminitem.findIndex(n => n.id === this.editadmintem.id) : -1;

          if (nr > -1) {

            this.adminitem[nr] = this.editadmintem;

          }

        });

      this.editadmintem = undefined;

    }

  }
  



}
