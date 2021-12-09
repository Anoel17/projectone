import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.css']
})
export class HomeEmployeeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
getUserInfo(){
  this.router.navigate(['user-details']);
}
}
