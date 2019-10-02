import { Component, OnInit } from '@angular/core';
import { AcceptService } from './accept.service'

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  acceptOrders: AcceptOrder[];
  errorMsg: any;
  editPendingOrder: AcceptOrder;


  constructor(public acceptOrderService: AcceptService) { }

  ngOnInit() {
    this.acceptOrderService.getAcceptOrdersItems().subscribe(
      data => this.acceptOrders = data,
      error => this.errorMsg = error

    );
  }
  delete(acceptOrders: AcceptOrder): void{
    if(confirm("Are you sure to deny " + acceptOrders.name+ "'s Order?"))
    {
      this.acceptOrders = this.acceptOrders.filter(n => n !== acceptOrders);
      this.acceptOrderService.deletetAcceptOrdersItems(acceptOrders.name).subscribe();
      alert( acceptOrders.name + "'s Order Denied!");
    }
  }
  edit(acceptOrders: AcceptOrder): void{
    
      this.acceptOrders = this.acceptOrders.filter(n => n !== acceptOrders);
      this.acceptOrderService.deletetAcceptOrdersItems(acceptOrders.name).subscribe();
      alert(acceptOrders.name + "'s Order Accepted!");
    
  }

}
