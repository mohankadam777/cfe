import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    private router:Router,
    private userService:UserService,
    private snackbar:SnackbarService,
    private dialogRef:MatDialogRef<SignupComponent>
  ){}

  password=true;
  confirmPassword=true;
  responseMessage:any;
  isLoading=false;

signup= new FormGroup(
  {name:new FormControl(null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]),
  email:new FormControl(null,[Validators.required,Validators.pattern(GlobalConstants.emailRegex)]),
  contactNumber:new FormControl(null,[Validators.required,Validators.pattern(GlobalConstants.contactNumberRegex)]),
  password: new FormControl(null,[Validators.required]),
  confirmPassword: new FormControl(null,Validators.required)},
);

validatePassword(){
if(this.signup.controls["password"]!=this.signup.controls["confirmPassword"]){
  return false;
}else{
  return true;
}
}
handleSubmit(){
  this.isLoading=true
  let formData = this.signup.value;
  let data = {
    name:formData.name,
    email:formData.email,
    contactNumber:formData.contactNumber,
    password:formData.password,
    confirmPassword:formData.confirmPassword
  }  
  this.userService.signup(JSON.stringify(data)).subscribe({next:(res:any)=>{ 
    this.isLoading=false;   
    this.dialogRef.close();
    this.responseMessage=res;
    this.snackbar.openSnackBar(this.responseMessage,"");
    this.router.navigate(['/']);
  },
error:(error:any)=>{
  this.isLoading=false;
this.responseMessage=error;
this.snackbar.openSnackBar(this.responseMessage?this.responseMessage.statusText:"Unknown Error" ,"error");
this.router.navigate(['/']);
}})
}
}
// https://cv.ee/et/vacancy/958202/rush-street-interactive-llc/full-stack-engineer?utm_source=workinestonia&utm_medium=kuulutus&utm_campaign=workinestonia-feed
//2 things pending error and visible not visible in pass word form