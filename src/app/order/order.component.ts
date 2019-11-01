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
  add:AddStatus;
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
  empBalance : number;
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
      },
      error: error => this.errorMsg = error
    });
  }

  details1(item1: MenuItem)
    {  
      
      if(this.cart.length == 0)
      {
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
      }
      else
      {
        let flag = false;
        for(var l of this.cart)
        {
          if(item1.itemId == l.itemID)
          {
            alert("Item " + l.itemName + " already present in cart");
            flag = true;
            break;
          }
        }
        if(flag == false)
          {
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
          }
      }    
    }

    //add to order south
    
    //delete 1 item from indo
    deleteItem1(itemD : Cart)
    {
      this.userId=localStorage.getItem('token');
      this.orderService.deleteItem(itemD.orderId,this.userId).subscribe({
        next: data => {
          this.cart = data;
          },
        error: error => this.errorMsg = error
      }); 
    }
    
    //add money to wallet
    addBalance()
    {
      console.log(this.amount);
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
        this.empBalance = Number(localStorage.getItem('balance')) + this.amount;
        this.orderService.addBalance(this.empBalance, localStorage.getItem('token')).subscribe({
          next:data=>{
            this.add=data;
            if(this.add){
              localStorage.setItem('balance', this.empBalance.toString());
              alert("Your updated balance is : " +this.empBalance);
            }
          },
          error: error => this.errorMsg = error
        });
        
      }
    
    }

    //checkout and edit balance
    checkOut(l : Cart[])
    {
      for (let i = 0; i < l.length; i++) 
      {
        this.total=this.total+l[i].totalPrice;
      }
      if(this.total >  Number(localStorage.getItem('balance')))
      {
        alert("Sorry ! You have insufficient balance to place this order")
      }
      else
      {
        this.orderService.checkOut(l,localStorage.getItem('token')).subscribe({
          next:data=>{
            this.cart=data;
            if(this.cart==null){
              alert("Thanks for you order | Your token number is 121 | " + "Total amount is " + this.total);
              this.empBalance =  Number(localStorage.getItem('balance')) - this.total;
              localStorage.setItem('balance',this.empBalance.toString());
              alert("Balanceleft in your Wallet : " + this.empBalance);
            }
          },
          error: error => this.errorMsg = error
        });
        
        //window.history.go(0);
      }
      
      
    }

    
}


