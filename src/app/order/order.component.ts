import { Component, OnInit } from '@angular/core';
import {IndianVendorService } from '../indian-vendor/indian-vendor.service';
import {AmericanVendorService } from '../american-vendor/american-vendor.service';
import {MexicanVendorService } from '../mexican-vendor/mexican-vendor.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  indianVendors: IndianVendor[];
  errorMsg: any;
  editIndianItem: IndianVendor;
  americanVendors: AmericanVendor[];
  editAmericanItem: AmericanVendor;
  mexicanVendors: MexicanVendor[];
  editMexicanItem: MexicanVendor;

  constructor(public indianVendorService: IndianVendorService, public americanVendorService:AmericanVendorService, public mexicanVendorService:MexicanVendorService) { }

  ngOnInit() {
    this.indianVendorService.getIndianItems().subscribe(
      data => this.indianVendors = data,
      error => this.errorMsg = error
    );
    this.americanVendorService.getAmericanItems().subscribe(
      data => this.americanVendors = data,
      error => this.errorMsg = error
    );
    this.mexicanVendorService.getMexicanItems().subscribe(
      data => this.mexicanVendors = data,
      error => this.errorMsg = error
    );

  }
  public AmericanCollapsed = false;
  public IndianCollapsed = false;
  public MexicanCollapsed = false;
}
