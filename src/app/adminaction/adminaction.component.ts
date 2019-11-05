import { Component, OnInit } from '@angular/core';
import { AdminactionService } from './adminaction.service';

import { NgForm } from '@angular/forms';
import { Vendor } from '../data/Vendor';
import { EditmodalComponent } from '../editmodal/editmodal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatapassageService } from '../datapassage.service';

@Component({
  selector: 'app-adminaction',
  templateUrl: './adminaction.component.html',
  styleUrls: ['./adminaction.component.css']
})
export class AdminactionComponent implements OnInit {
  
  adminitem: adminact[];
  errorMsg: any;
  vendors:Vendor[];
  editadmintem: adminact;
  vendor:Vendor={
    vendorId: null,
	vendorName: null,
	vendorEmail: null,
	vendorPhone: null,
    vendorUname: null,
	vendorPassword: null,
	balance: 1234
  };
  constructor(public adminactService:AdminactionService,private modalservice: NgbModal,private interact: DatapassageService ) { }

  ngOnInit() {
    this.adminactService.showVendor().subscribe({
      next:data=>{
        this.vendors=data;
        console.log(this.vendors);
      },
      error:error=>this.errorMsg=error
    });
  }
   
  add(addForm: NgForm): void {
    $('#btnSave').click(function() {
      $('#myModal').modal('hide');
   });
    console.log(this.vendor.vendorName);
    this.adminactService.addvendor(this.vendor).subscribe(
      data => this.adminitem = data,
      error => this.errorMsg = error
    )
   
  }
 
 
  delete(v: Vendor,i:any): void {
    //this.adminitem = this.adminitem.filter(n => n !==adminacting );
    this.adminactService.deleteadminact(v.vendorId).subscribe();
    alert("Menu Item: " + v.vendorName + " Deleted!");
    this.vendors.splice(i,1);
  }

  
  edit(v:Vendor){
  
    this.interact.sendMessage(v);

    this.modalservice.open(EditmodalComponent);
    //this.editadmintem = v;
    this.update();
  }

  update() 
  {
    if (this.editadmintem) 
    {
      this.adminactService.updateadminact(this.editadmintem).subscribe
        (editNorthItem =>
          {
            const nr = this.editadmintem ? this.adminitem.findIndex(n => n.id === this.editadmintem.id) : -1;
            if (nr > -1) 
            {
              this.adminitem[nr] = this.editadmintem;
            }
          }
        );
      this.editadmintem = undefined;
    }
  }
  
}
