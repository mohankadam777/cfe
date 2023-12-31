import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http :HttpClient,private router:Router) { }
  isAuthenticated():boolean{
    const token=localStorage.getItem("token");
    if(!token){
      this.router.navigate(["/"])
      return false;
    }
    return true;
  }
}
