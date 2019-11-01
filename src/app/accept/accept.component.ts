import { Component, OnInit } from '@angular/core';
import { AcceptService } from './accept.service'
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  acceptOrders: AcceptOrder[];
  errorMsg: any;
  editPendingOrder: AcceptOrder;
  msg:any;

  constructor(public acceptOrderService: AcceptService) { }

  ngOnInit() {
    this.acceptOrderService.getAcceptOrdersItems().subscribe(
      data => this.acceptOrders = data,
      error => this.errorMsg = error

    );
  }
  delete(acceptOrde: AcceptOrder): void{
    if(confirm("Are you sure to deny " + acceptOrde.vuser_name+ "'s Order?"))
    {
      this.acceptOrders = this.acceptOrders.filter(n => n !== acceptOrde);
      this.acceptOrderService.deleteOrdersItems(acceptOrde.vorder_id).subscribe();
      alert( acceptOrde.vuser_name + "'s Order Denied!");
    }
  }
  edit(acceptO: AcceptOrder): void{
    
      this.acceptOrders = this.acceptOrders.filter(n => n !== acceptO);
      console.log(acceptO.vorder_id);
      this.acceptOrderService.deletetAcceptOrdersItems(acceptO).subscribe();
      

      
       alert(acceptO.vuser_name + "your order has been placed");
    
  }

  bal(){
    
    this.acceptOrderService.calculatebalance().subscribe(
      response=>alert("the current balance is"+ response),
      error => this.errorMsg = error
    ) ;
    

  }  

}
