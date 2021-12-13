import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { user } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";
  errorMsg="";

  testPerm = "";



  currentUser: user = {
    id:0,
    screenName:"",
    userType: "",
    homeState: "",
    homeTown: "",
    address: "",
    email: "",
    password: ""
  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  performLogin() {
    this.userService.getLoggedIn(this.email, this.password).subscribe(
      
      (response) => {
        console.log(response);
        sessionStorage.setItem('userId', ""+response.id);
        sessionStorage.setItem('userLevel', response.userType);
        
        if(response.userType = "manager"){
          this.router.navigate(['manager-home']);
        }else if(response.userType = "employee") {
          this.router.navigate(['employe-home'])
        }
      },
      (error) => {
          console.log(error);
          this.errorMsg= "ERROR!";
          console.log(this.errorMsg);
      }
    );
    

  }

}
