import { Component, OnInit, OnDestroy } from '@angular/core';
import{Details} from './logging';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserLogin} from '../data/user-login';
import { LoginData } from '../data/login-data';
import { LoginService } from './login.service';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy  {
  
 
  constructor(private router:Router, public header: HeaderService, private loginService:LoginService){

  }

  userData: UserLogin ={
    type: 'Vendor',
    username: null,
    password: null
  };
  deptCopy: string;
  loginError: boolean = false;
  employeeList: LoginData;
  errorMsg: any;
  login_match: boolean = false;

  
  onSubmit(form: NgForm): void{
    
    //if(form.valid && this.passwordConflict(this.userData.password)){
      
      if(this.userData.type=='Vendor')
      {
        this.getEmpV(this.userData.username, this.userData.password);
      }
      else
      {
        
        this.getEmp(this.userData.username, this.userData.password);
        
      }
      
    //}else{
     // this.loginError = true;
    
  }

  getEmp(username: String, password:String){
    this.loginService.getLoginData(username, password).subscribe({
      next:data => {
        this.employeeList = data;
        console.log(this.employeeList[0].employeeId);
        if(this.employeeList[0].pass){
          this.router.navigate(['/Order']);
          localStorage.setItem('token', this.userData.username);
          this.header.tokenUser();
        }else{
          this.loginError = true;
        }
      },
      error: error => this.errorMsg = error
    }
    );
    
  }
  getEmpV(username: String, password:String){
    this.loginService.getLoginDataV(username, password).subscribe({
      next:data => {
        this.employeeList = data;
        if(data[0] && this.employeeList[0].department.toLowerCase() == this.userData.type.toLowerCase()){
          this.router.navigate(['/Order']);
          localStorage.setItem('token', this.userData.username);
          //localStorage.setItem('tokenId', this.employeeList[0].member_id);
          this.header.tokenUser();
        }else{
          this.loginError = true;
        }
      },
      error: error => this.errorMsg = error
    }
    );
    
  }
  passwordConflict(str: string): boolean{
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
		return re.test(str);
  }
  ngOnInit() {
    this.employeeList = null;
    this.header.hide();
  }

  ngOnDestroy(): void {
    this.header.show();
  }
   
  // ngOnInit(){}
  // roles=['Employee','Vendor','Admin'];

  // model = new Details("","","");

  // submitted = false;
  // onSubmit(loginform:NgForm) { 
      
  //     if(this.model.username == "admin" && this.model.password == "admin" && this.model.role == "Admin" )
  //     {this.router.navigate(['adminhome']);
  //   this.submitted = true;}
  //   else if(this.model.username == "employee" && this.model.password == "empl" && this.model.role == "Employee" )
  //   {
  //      this.router.navigate(['Order']);
  //   }
  //   else if(this.model.username == "american" && this.model.password == "america" && this.model.role == "Vendor" )
  //   {
  //      this.router.navigate(['american-vendor']);
  //   }
  //   else if(this.model.username == "indian" && this.model.password == "india" && this.model.role == "Vendor" )
  //   {
  //      this.router.navigate(['indian-vendor']);
  //   }
  //   else if(this.model.username == "mexican" && this.model.password == "mexico" && this.model.role == "Vendor" )
  //   {
  //      this.router.navigate(['mexican-vendor']);
  //   }
  //   else{
  //     alert("invalid user name or password or Role");
  //     loginform.reset();
  //   }

        
  // }



}
