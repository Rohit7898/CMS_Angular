import { Component, OnInit } from '@angular/core';
import{Details} from './logging';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
 
  constructor(private router:Router){

  }

   
  ngOnInit(){}
  roles=['Employee','Vendor','Admin'];

  model = new Details("","","");

  submitted = false;
  onSubmit() { 
      
      if(this.model.username == "admin" && this.model.password == "admin" && this.model.role == "Admin" )
      {this.router.navigate(['adminhome']);
    this.submitted = true;}
    else if(this.model.username == "employee" && this.model.password == "empl" && this.model.role == "Employee" )
    {
       this.router.navigate(['Order']);
    }
    else if(this.model.username == "american" && this.model.password == "amri" && this.model.role == "Vendor" )
    {
       this.router.navigate(['american-vendor']);
    }
    else if(this.model.username == "indian" && this.model.password == "amri" && this.model.role == "Vendor" )
    {
       this.router.navigate(['indian-vendor']);
    }
    else if(this.model.username == "mexican" && this.model.password == "amri" && this.model.role == "Vendor" )
    {
       this.router.navigate(['mexican-vendor']);
    }
    else{
      alert("invalid user name or password or Role");
      this.router.navigate(['login']);
    }

        
  }



}
