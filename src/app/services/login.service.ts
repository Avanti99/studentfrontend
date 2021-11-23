import { HttpClient } from '@angular/common/http';
import { tokenReference } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080"
  constructor(private http:HttpClient) { }

  generateToken(credentials:any){
    return this.http.post(`${this.url}/token`,credentials)
  }
  

  //for login
  loginUser(token:any)
  {
    console.log(token);
    localStorage.setItem("token", token)
    return true;
  }

  isLoggedIn()
  {
    let token = localStorage.getItem("token");
    return !!token;
  }

  logout()
  {
    localStorage.removeItem('token');
    return true;
  }

  getToken()
  {
    return localStorage.getItem("token");
  }
}