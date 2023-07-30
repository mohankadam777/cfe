import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { GlobalConstants } from '../shared/global-constants';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private dialogRef :MatDialogRef<LoginComponent>,
    private userService:UserService,
    private snackbar:SnackbarService,private router:Router
    ){}
  isLoading  :boolean= false;
  responseMessage:any;
  loginForm= new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.pattern(GlobalConstants.emailRegex)]),
    password:new FormControl(null,Validators.required)
  });

  handleSubmit(){
    this.isLoading=true;
    console.log(this.loginForm.value);
    let data = {
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    this.userService.login(JSON.stringify(data)).subscribe({next:(res:string)=>{
      this.isLoading=false;
      this.dialogRef.close();
      let token=res.slice(10,length-2);
      localStorage.setItem("token",token); 
      this.responseMessage="Successfully Logged in";
      this.router.navigate(['/cafe/dashboard'])
      this.snackbar.openSnackBar(this.responseMessage,"");
      // this.ro
    },
    error:(error:any)=>{
      this.isLoading=false;
    this.responseMessage=error;
    this.snackbar.openSnackBar(this.responseMessage?this.responseMessage.statusText:"Unknown Error" ,"error");
    this.router.navigate(['/']);
    }})
    // let data = 
  }

}
