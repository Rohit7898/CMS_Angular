import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: OrderComponent[];
  
  errorMsg: any;
  constructor() { }

  ngOnInit() {
  }
  public AmericanCollapsed = false;
  public IndianCollapsed = false;
  public MexicanCollapsed = false;
}


