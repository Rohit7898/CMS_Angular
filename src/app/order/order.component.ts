import { Component, OnInit } from '@angular/core';
import {IndianVendorService } from '../indian-vendor/indian-vendor.service';
import {AmericanVendorService } from '../american-vendor/american-vendor.service';
import {MexicanVendorService } from '../mexican-vendor/mexican-vendor.service';
import { OrderService } from './order.service';
import { MenuItem } from '../data/menu_item';
import { AddStatus } from '../data/addStatus';
import { Cart } from '../data/cart';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public AmericanCollapsed = true;
  public IndianCollapsed = true;
  public MexicanCollapsed = true;
  public CartCollapsed = true;
  public AddCollapsed = true;
  menuItem:MenuItem[];
  item:MenuItem;
  cart:Cart[];
  userId: String;
  order: Order[];
  indianVendors: IndianVendor[];
  errorMsg: any;
  editIndianItem: IndianVendor;
  americanVendors: AmericanVendor[];
  editAmericanItem: AmericanVendor;
  mexicanVendors: MexicanVendor[];
  editMexicanItem: MexicanVendor;
  list1: MenuItem[] = [];
  list2: AmericanVendor[] = [];
  list3: MexicanVendor[] = [];
  list: Order[] = [];
  total: number = 0.0;
  empBalance : number = 50;
  amount : number;
  addStatus: AddStatus[];

  constructor(public orderService:OrderService) { }

  ngOnInit() {
      this.userId=localStorage.getItem('token');
      this.orderService.getMenuItems().subscribe({
        next:data => {
          this.menuItem = data;
        },
        error: error => this.errorMsg = error
      }
      );

      
  }
  
  showCart()
  {
    this.userId=localStorage.getItem('token');
    this.orderService.getCart(this.userId).subscribe({
      next:data => {
        this.cart = data;
        console.log(this.cart[0].itemID);
      },
      error: error => this.errorMsg = error
    });
  }

  details1(item1: MenuItem)
    {  
      
      if(this.cart.length == 0)
      {
<<<<<<< HEAD
        this.list1.push(ind);
        this.total += Math.round(ind.itemPrice);  
=======
        this.userId=localStorage.getItem('token');
        this.orderService.addToCart(item1,this.userId).subscribe({
          next: data => {
            this.addStatus = data;
            if(this.addStatus){
              //console.log(this.addStatus[0].add);
            }
            else{
            // this.added = false;
            }
          },
          error: error => this.errorMsg = error
        }); 
>>>>>>> 7eb55588153ce9dedd7b33606c2efbea126b0122
      }
      else
      {
        let flag = false;
        for(var l of this.cart)
        {
<<<<<<< HEAD
          if(ind.itemId == l.itemId)
=======
          if(item1.itemId == l.itemID)
>>>>>>> 7eb55588153ce9dedd7b33606c2efbea126b0122
          {
            alert("Item " + l.itemName + " already present in cart");
            flag = true;
            break;
          }
        }
        if(flag == false)
          {
<<<<<<< HEAD
            this.list1.push(ind);
            this.total += Math.round(ind.itemPrice);  
=======
            this.userId=localStorage.getItem('token');
            this.orderService.addToCart(item1,this.userId).subscribe({
              next: data => {
                this.addStatus = data;
                if(this.addStatus){
                  //console.log(this.addStatus[0].add);
                }
                else{
                // this.added = false;
                }
              },
              error: error => this.errorMsg = error
            }); 
>>>>>>> 7eb55588153ce9dedd7b33606c2efbea126b0122
          }
      }    
    }

    //add to order south
<<<<<<< HEAD
    details2(amr: AmericanVendor)
    {            
      if(this.list2.length == 0)
      {
        this.list2.push(amr);
        this.total += Math.round(amr.itemPrice);  
      }
      else
      {
        let flag = false;
        for(var l of this.list2)
        {
          if(amr.itemId == l.itemId)
          {
            alert("Item " + l.itemName + " already present in cart");
            flag = true;
            break;
          }
        }
        if(flag == false)
          {
            this.list2.push(amr);
            this.total += Math.round(amr.itemPrice);  
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
      this.total -= Math.round(ind.itemPrice);
      this.list1 = this.list1.filter(l => l!== ind);
    }
=======
>>>>>>> 7eb55588153ce9dedd7b33606c2efbea126b0122
    
    //delete 1 item from indo
    deleteItem1(itemD : Cart)
    {
<<<<<<< HEAD
      this.total -= Math.round(amr.itemPrice);
      this.list2 = this.list2.filter(l => l!== amr);
=======
      this.userId=localStorage.getItem('token');
      this.orderService.deleteItem(itemD.orderId,this.userId).subscribe({
        next: data => {
          this.cart = data;
          },
        error: error => this.errorMsg = error
      }); 
>>>>>>> 7eb55588153ce9dedd7b33606c2efbea126b0122
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


