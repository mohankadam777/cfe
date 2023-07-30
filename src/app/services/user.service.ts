import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url="http://localhost:8081";

  constructor(private http:HttpClient) { }

  signup(data:any):any{
    return this.http.post(this.url+"/user/signup",data,{headers:new HttpHeaders({"Content-Type":"application/json"}),responseType:"text" as "json"})
  }
  login(data:any):any{
    return this.http.post(this.url+"/user/login",data,{headers:new HttpHeaders({"Content-Type":"application/json"}),responseType:"text" as "json"})
  }
  checkToken():any{
    return this.http.get(this.url+"/user/checkToken",{headers:new HttpHeaders({"Content-Type":"text/plain ; charset=utf-8"}),responseType:"text"})
  }
  checkTokens():any{
    return this.http.get(this.url+"/user/checkToken",{headers:new HttpHeaders({"Content-Type":"application/json"}),responseType:"text" as "json" })
  }
  changePassword(data :any):any{
return this.http.post(this.url+"/user/changePassword",{headers:new HttpHeaders({"Content-Type":"application/json"}),responseType:"text" as "json"})
  }
}
