import { Component, OnInit } from '@angular/core';
import {IndianVendorService } from './indian-vendor.service';
@Component({
  selector: 'app-indian-vendor',
  templateUrl: './indian-vendor.component.html',
  styleUrls: ['./indian-vendor.component.css']
})
export class IndianVendorComponent implements OnInit {

  indianVendors: IndianVendor[];
  errorMsg: any;
  editNorthItem: IndianVendor;

  constructor(public indianVendorService: IndianVendorService) { }

  ngOnInit() {
    this.indianVendorService.getIndianItems().subscribe(
      data => this.indianVendors = data,
      error => this.errorMsg = error
    );
  }

}
