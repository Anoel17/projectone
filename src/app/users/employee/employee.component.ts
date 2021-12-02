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


  

}
