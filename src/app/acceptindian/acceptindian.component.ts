import { Component, OnInit } from '@angular/core';
import {AcceptindianService} from './acceptindian.service';
@Component({
  selector: 'app-acceptindian',
  templateUrl: './acceptindian.component.html',
  styleUrls: ['./acceptindian.component.css']
})
export class AcceptindianComponent implements OnInit {
  acceptOrders: indianorder[];
  errorMsg: any;
  editPendingOrder: indianorder;
  msg:any;

   
   
  constructor(public acceptOrderService: AcceptindianService) { }

  ngOnInit() {
  
    this.acceptOrderService.getAcceptOrdersItems().subscribe(
      data => this.acceptOrders = data,
      error => this.errorMsg = error

    );
    }
    delete(acceptOr: indianorder): void{
      if(confirm("Are you sure to deny " + acceptOr.vuser_name+ "'s Order?"))
      {
        this.acceptOrders = this.acceptOrders.filter(n => n !== acceptOr);
        this.acceptOrderService.deleteOrdersItems(acceptOr.vorder_id).subscribe();
        alert( acceptOr.vuser_name + "'s Order Denied!");
      }
  }
  
  edit(acceptOrd: indianorder): void{
    
    this.acceptOrders = this.acceptOrders.filter(n => n !== acceptOrd);
    console.log(acceptOrd.vorder_id);
    this.acceptOrderService.deletetAcceptOrdersItems(acceptOrd).subscribe();
    

    
     alert(acceptOrd.vuser_name + "your order has been placed");
  
}
bal(){
    
  this.acceptOrderService.calculatebalance().subscribe(
    response=>alert("the current balance is"+ response),
    error => this.errorMsg = error
  ) ;
  

}  


}
