import { Component, OnInit } from '@angular/core';

import { user } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private userService: UserService) { }

  allUsers: user[] = [];

  allFlag = false;
  employeeFlag = false;
  managerFlag = false;

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.allUsers = response;
        console.log(response);
      },
      (error) => {
        console.log(console.error()); 
      }
    );
  }

  // setManagerFlag() {
  //   this.loadPendingRequests();
  //   if (this.managerFlag==true) this.managerFlag=false;
  //   else this.managerFlag=true;
  // }


  // setEmployeeFlag() {
  //   this.loadResolvedRequests();
  //   if (this.employeeFlag==true) this.employeeFlag=false;
  //   else this.employeeFlag=true;
  // }


}
