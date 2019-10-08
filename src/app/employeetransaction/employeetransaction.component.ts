import { Component, OnInit } from '@angular/core';
import { EmployeetransactionService} from './employeetransaction.service';


@Component({
  selector: 'app-employeetransaction',
  templateUrl: './employeetransaction.component.html',
  styleUrls: ['./employeetransaction.component.css']
})
export class EmployeetransactionComponent implements OnInit {
  emptrans: Emptrans[];
  errorMsg: any;
  title="Order History";
  constructor(public employeetransactionService: EmployeetransactionService) { }

  ngOnInit() {
    this.employeetransactionService.getEmpTransac().subscribe(
      data => this.emptrans = data,
      error => this.errorMsg = error
    );
  }

}
