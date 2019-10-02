import { Component, OnInit } from '@angular/core';
import { MexicanVendorService } from './mexican-vendor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mexican-vendor',
  templateUrl: './mexican-vendor.component.html',
  styleUrls: ['./mexican-vendor.component.css']
})
export class MexicanVendorComponent implements OnInit {

  mexicanVendors: MexicanVendor[];
  errorMsg: any;
  editMexicanItem: MexicanVendor;

  constructor(public mexicanVendorService: MexicanVendorService) { }

  ngOnInit() {
    this.mexicanVendorService.getMexicanItems().subscribe(
      data => this.mexicanVendors = data,
      error => this.errorMsg = error
    );
  }

  add(addForm: NgForm): void {
    this.editMexicanItem = undefined;
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

    this.mexicanVendors.push(addForm.value);
    console.log(this.mexicanVendors);
    alert("Menu Item: " + addForm.value.name + " Added!");
    addForm.resetForm();


  }
  delete(mexicanVendor: MexicanVendor): void {
    this.mexicanVendors = this.mexicanVendors.filter(n => n !== mexicanVendor);
    this.mexicanVendorService.deleteMexicanItem(mexicanVendor.id).subscribe();
    alert("Menu Item: " + mexicanVendor.name + " Deleted!");
  }

  edit(mexicanVendor: MexicanVendor)
  {
    this.editMexicanItem = mexicanVendor;
  }

  update() {
    if (this.editMexicanItem) {
      this.mexicanVendorService.updateMexicanItem(this.editMexicanItem).subscribe
        (editNorthItem => {
          const nr = this.editMexicanItem ? this.mexicanVendors.findIndex(n => n.id === this.editMexicanItem.id) : -1;
          if (nr > -1) {
            this.mexicanVendors[nr] = this.editMexicanItem;
          }
        });
      this.editMexicanItem = undefined;
    }
  }

}
