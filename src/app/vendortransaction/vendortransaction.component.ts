import { Component, OnInit } from '@angular/core';
import { VendortransactionService} from './vendortransaction.service';

@Component({
  selector: 'app-vendortransaction',
  templateUrl: './vendortransaction.component.html',
  styleUrls: ['./vendortransaction.component.css']
})
export class VendortransactionComponent implements OnInit {
  vtrans: Ventrans[];
  errorMsg: any;
  title="  Order History"; 

  constructor(public vendortransactionService: VendortransactionService) { }

  ngOnInit() {
    this.vendortransactionService.getVenTransac().subscribe(
      data => this.vtrans = data,
      error => this.errorMsg = error
    );
  }

}
