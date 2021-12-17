import { Injectable } from '@angular/core';
import { user } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  
  constructor() { }

  storeUser(user: user){
    sessionStorage.setItem("userData", JSON.stringify(user));
  }

  retrieveUser() {
  var data: any = sessionStorage.getItem("userData");
  return JSON.parse(data == null?'':data);
  }
  removedUser() {
    sessionStorage.removeItem("userData");
  }

}
