import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clearLog() {
    sessionStorage.removeItem("userLevel");
  }

  isEmployee() {
    let level= sessionStorage.getItem("userLevel");
    return (level=="employee");
  }

  isManager() {
    let level= sessionStorage.getItem("userLevel");
    return (level=="manager");
  }
  

}
