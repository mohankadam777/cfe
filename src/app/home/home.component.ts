import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from "@angular/material/dialog"
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup/signup.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private dialog :MatDialog,
    private userService: UserService,
    private router : Router){}
  ngOnInit(): void {
    console.log("on init");
    // console.log("on init",this.userService.checkToken);
    
    this.userService.checkTokens().subscribe({next:(res:any)=>{
    console.log("on init i method");
      console.log(res);
      this.router.navigate(['/cafe/dashboard'])
    },
  error:(error:any)=>{
    console.log("in error ");

      this.router.navigate(['/'])
    
    console.log(error);
    localStorage.clear();
    
  }})
  console.log("at ending");
  
  }


  openSignupDialog(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.width="550px";
    this.dialog.open(SignupComponent,dialogConfig)
  }
  openLoginDialog(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.width="550px";
    this.dialog.open(LoginComponent,dialogConfig)
  }

  

}
