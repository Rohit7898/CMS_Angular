import { Component, OnInit } from '@angular/core';
import { AmericanVendorService } from './american-vendor.service';
import { NgForm } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

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
    console.log(addForm.value.nname);
    console.log(addForm.value.price);
     this.editAmericanItem = undefined;
    // name = name.trim();
    if (!addForm.value.nname) {
      return;
    }

    if (!addForm.value.price) {
      return;
    }
     
     const md:amvend={

                                 itemName:addForm.value.nname,
                                 itemPrice:addForm.value.price
                      };
    // this.americanVendors.push()
    // The server will generate the id for this new North Indian Item
    //  const newNorthItem: AmericanVendor = { addForm.value  } as NorthVendor;
    // this.northVendorService.addNorthIndianItem(newNorthItem)
    //   .subscribe(north => {this.northVendors.push(north), console.log(north)},
    //   error => this.errorMsg = error);
    // this.editAmericanItem.itemName = addForm.value.name;
    // this.editAmericanItem.itemPrice = addForm.value.price;
   
    // console.log(addForm.value.name);
    // console.log(addForm.value.price);
    // this.americanVendorService.addAmericanItem(this.editAmericanItem).subscribe();
    
    this.americanVendorService.addAmericanItem(md).subscribe(
      data => this.americanVendors = data,
      error => this.errorMsg = error
    );
    console.log(addForm.value.name);
    alert("Menu Item: " + addForm.value.nname + " Added!");
    addForm.resetForm();


  }

  delete(americanVendor: AmericanVendor): void {
    this.americanVendors = this.americanVendors.filter(n => n !== americanVendor);
    this.americanVendorService.deleteAmericanItem(americanVendor.itemId).subscribe();
    console.log(americanVendor.itemName);
    alert("Menu Item: " + americanVendor.itemName + " Deleted!");
  }

  edit(americanVendor: AmericanVendor)
  {
    this.editAmericanItem = americanVendor;
  }

  update() {
    if (this.editAmericanItem) {
      this.americanVendorService.updateAmericanItem(this.editAmericanItem).subscribe
        (editNorthItem => {
          const nr = this.editAmericanItem ? this.americanVendors.findIndex(n => n.itemId === this.editAmericanItem.itemId) : -1;
          if (nr > -1) {
            this.americanVendors[nr] = this.editAmericanItem;
          }
        });
      this.editAmericanItem = undefined;
    }
  }


}
