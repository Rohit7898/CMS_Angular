import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: employee[];
  errorMsg: any;
  employeeList: LoginComponent["employeeList"];
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    console.log(this.employeeList.employeeId);
    this.employeeService.getEmployees().subscribe(
      data => this.employee = data,
      error => this.errorMsg = error
    );
    
  }
}


