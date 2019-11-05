import { Component, OnInit } from '@angular/core';
import {DatapassageService} from '../datapassage.service'
import { from } from 'rxjs';
import { EditmodalService } from './editmodal.service';
import {Vendor} from '../data/Vendor';

@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.css']
})
export class EditmodalComponent implements OnInit {

  constructor(private interact: DatapassageService,public editmodal : EditmodalService) { }

  obj: object;
  ngOnInit() {
    this.obj = this.interact.message;
  }
  submit(myForm){
    const md : Vendor={
      vendorId: myForm.id,
	vendorName: myForm.name,
	vendorEmail: myForm.email,
	vendorPhone: myForm.contact,
    vendorUname: myForm.username,
	vendorPassword: myForm.password,
	balance: myForm.balance
    };
    this.editmodal.updateadminact(md).subscribe();
  }

}
