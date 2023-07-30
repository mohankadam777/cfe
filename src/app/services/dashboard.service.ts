import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url="http://localhost:8081"

  constructor(private http:HttpClient) { }

  getDetails():any{
    return this.http.get(this.url+"/dashboard/details",{headers:new HttpHeaders({"Content-Type":"application/json"}),responseType:"text" as "json"});
  }
}
