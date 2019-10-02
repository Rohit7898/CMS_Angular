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

  order: Order[];
  indianVendors: IndianVendor[];
  errorMsg: any;
  editIndianItem: IndianVendor;
  americanVendors: AmericanVendor[];
  editAmericanItem: AmericanVendor;
  mexicanVendors: MexicanVendor[];
  editMexicanItem: MexicanVendor;
  list1: IndianVendor[] = [];
  list2: AmericanVendor[] = [];
  list3: MexicanVendor[] = [];
  list: Order[] = [];
  total: number = 0.0;
  empBalance : number = 50;
  amount : number;

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

  details1(ind: IndianVendor)
    {            
      if(this.list1.length == 0)
      {
        this.list1.push(ind);
        this.total += Math.round(ind.price);  
      }
      else
      {
        let flag = false;
        for(var l of this.list1)
        {
          if(ind.id == l.id)
          {
            alert("Item " + l.name + " already present in cart");
            flag = true;
            break;
          }
        }
        if(flag == false)
          {
            this.list1.push(ind);
            this.total += Math.round(ind.price);  
          }
      }    
    }

    //add to order south
    details2(amr: AmericanVendor)
    {            
      if(this.list2.length == 0)
      {
        this.list2.push(amr);
        this.total += Math.round(amr.price);  
      }
      else
      {
        let flag = false;
        for(var l of this.list2)
        {
          if(amr.id == l.id)
          {
            alert("Item " + l.name + " already present in cart");
            flag = true;
            break;
          }
        }
        if(flag == false)
          {
            this.list2.push(amr);
            this.total += Math.round(amr.price);  
          }
      }    
    }

//add to order north
    details3(mex: MexicanVendor)
    {            
      if(this.list3.length == 0)
      {
        this.list3.push(mex);
        this.total += Math.round(mex.price);  
      }
      else
      {
        let flag = false;
        for(var l of this.list3)
        {
          if(mex.id == l.id)
          {
            alert("Item " + l.name + " already present in cart");
            flag = true;
            break;
          }
        }
        if(flag == false)
          {
            this.list3.push(mex);
            this.total += Math.round(mex.price);  
          }
      }    
    }

    //delete 1 item from indo
    deleteItem1(ind : IndianVendor)
    {
      this.total -= Math.round(ind.price);
      this.list1 = this.list1.filter(l => l!== ind);
    }
    
    //delete 1 item from south
    deleteItem2(amr : AmericanVendor)
    {
      this.total -= Math.round(amr.price);
      this.list2 = this.list2.filter(l => l!== amr);
    }

    
    //delete 1 item from north
    deleteItem3(mex : MexicanVendor)
    {
      this.total -= Math.round(mex.price);
      this.list3 = this.list3.filter(l => l!== mex);
    }

    //add money to wallet
    addBalance()
    {
      if(this.amount < 0)
      {
        alert("Amount cannot be negative");
      }
      else if(!this.amount)
      {
        alert("amount cant be empty");
        return;
      }
      else
      {
        this.empBalance = this.empBalance + this.amount;
       //console.log(this.empBalance);
        alert("Your updated balance is : " +this.empBalance);
      }
    
    }

    //checkout and edit balance
    checkOut(l : Order[])
    {
      if(this.total > this.empBalance)
      {
        alert("Sorry ! You have insufficient balance to place this order")
      }
      else
      {
        alert("Thanks for you order | Your token number is 121 | " + "Total amount is " + this.total);
        this.empBalance = this.empBalance - this.total;
        alert("Balanceleft in your Wallet : " + this.empBalance);
        //window.history.go(0);
      }
      
      
    }
}


