import { Component, OnInit } from '@angular/core';
import { AmericanVendorService } from './american-vendor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-american-vendor',
  templateUrl: './american-vendor.component.html',
  styleUrls: ['./american-vendor.component.css']
})
export class AmericanVendorComponent implements OnInit {

  americanVendors: AmericanVendor[];
  errorMsg: any;
  editAmericanItem: AmericanVendor;

  constructor(public americanVendorService: AmericanVendorService) { }

  ngOnInit() {
    this.americanVendorService.getAmericanItems().subscribe(
      data => this.americanVendors = data,
      error => this.errorMsg = error
    );
  }

  add(addForm: NgForm): void {
    this.editAmericanItem = undefined;
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

    this.americanVendors.push(addForm.value);
    console.log(this.americanVendors);
    alert("Menu Item: " + addForm.value.name + " Added!");
    addForm.resetForm();


  }

  delete(americanVendor: AmericanVendor): void {
    this.americanVendors = this.americanVendors.filter(n => n !== americanVendor);
    this.americanVendorService.deleteAmericanItem(americanVendor.id).subscribe();
    alert("Menu Item: " + americanVendor.name + " Deleted!");
  }

  edit(americanVendor: AmericanVendor)
  {
    this.editAmericanItem = americanVendor;
  }

  update() {
    if (this.editAmericanItem) {
      this.americanVendorService.updateAmericanItem(this.editAmericanItem).subscribe
        (editNorthItem => {
          const nr = this.editAmericanItem ? this.americanVendors.findIndex(n => n.id === this.editAmericanItem.id) : -1;
          if (nr > -1) {
            this.americanVendors[nr] = this.editAmericanItem;
          }
        });
      this.editAmericanItem = undefined;
    }
  }


}
