import { Component, OnInit } from '@angular/core';
import { AmericanVendorComponent } from '../american-vendor/american-vendor.component';
import { NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adminaction',
  templateUrl: './adminaction.component.html',
  styleUrls: ['./adminaction.component.css']
})
export class AdminactionComponent  {
  txtname;
  txtage;
  constructor() { }

  menulist=  ['American','Mexican','Mediterrian'];

  deletecontact(){

    console.log(name);
   
    for(var i=0; i < this.menulist.length;i++)
    {
         if(this.menulist[i] == name)
         {
           this.menulist.splice(i,1);
         }

    }
  }

  



}
