import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { LoginComponent } from '../login/login.component';
import { employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: employee={
    image:localStorage.getItem('image'),
    name: localStorage.getItem('name'),
    title:localStorage.getItem('role'),
    id: localStorage.getItem('token'),
    contact: localStorage.getItem('contact'),
    balance: localStorage.getItem('balance')
  };
  errorMsg: any;
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    // this.employee[0].name=localStorage.getItem('name');
    //   this.employee[0].contact=localStorage.getItem('contact');
    //   this.employee[0].title=localStorage.getItem('role');
    //   this.employee[0].balance=localStorage.getItem('balance');
    //   this.employee[0].image=localStorage.getItem('image');
  }
}


