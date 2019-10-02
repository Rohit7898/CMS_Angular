import { Component, OnInit } from '@angular/core';
import {IndianVendorService } from './indian-vendor.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-indian-vendor',
  templateUrl: './indian-vendor.component.html',
  styleUrls: ['./indian-vendor.component.css']
})
export class IndianVendorComponent implements OnInit {

  indianVendors: IndianVendor[];
  errorMsg: any;
  editIndianItem: IndianVendor;

  constructor(public indianVendorService: IndianVendorService) { }

  ngOnInit() {
    this.indianVendorService.getIndianItems().subscribe(
      data => this.indianVendors = data,
      error => this.errorMsg = error
    );
  }

  add(addForm: NgForm): void {
    this.editIndianItem = undefined;
    // name = name.trim();
    if (!addForm.value.name) {
      return;
    }

    if (!addForm.value.price) {
      return;
    }

    // The server will generate the id for this new North Indian Item
    // const newNorthItem: NorthVendor = { name, price } as NorthVendor;
    // this.northVendorService.addNorthIndianItem(newNorthItem)
    //   .subscribe(north => {this.northVendors.push(north), console.log(north)},
    //   error => this.errorMsg = error);

    this.indianVendors.push(addForm.value);
    console.log(this.indianVendors);
    alert("Menu Item: " + addForm.value.name + " Added!");
    addForm.resetForm();


  }
  delete(indianVendor: IndianVendor): void {
    this.indianVendors = this.indianVendors.filter(n => n !== indianVendor);
    this.indianVendorService.deleteIndianItem(indianVendor.id).subscribe();
    alert("Menu Item: " + indianVendor.name + " Deleted!");
  }

  edit(indianVendor: IndianVendor)
  {
    this.editIndianItem = indianVendor;
  }

  update() {
    if (this.editIndianItem) {
      this.indianVendorService.updateIndianItem(this.editIndianItem).subscribe
        (editNorthItem => {
          const nr = this.editIndianItem ? this.indianVendors.findIndex(n => n.id === this.editIndianItem.id) : -1;
          if (nr > -1) {
            this.indianVendors[nr] = this.editIndianItem;
          }
        });
      this.editIndianItem = undefined;
    }
  }
}
