import { Component, OnInit } from '@angular/core';
import {IndiantransactionService} from './indiantransaction.service';
@Component({
  selector: 'app-indiantransaction',
  templateUrl: './indiantransaction.component.html',
  styleUrls: ['./indiantransaction.component.css']
})
export class IndiantransactionComponent implements OnInit {
  indtrans: intrans[];
  errorMsg: any;
  title="  Order History";
  constructor(public indiatransactionservice:IndiantransactionService) { }

  ngOnInit() {
    this.indiatransactionservice.getindTransac().subscribe(
      data => this.indtrans = data,
      error => this.errorMsg = error
    );
  }

}
