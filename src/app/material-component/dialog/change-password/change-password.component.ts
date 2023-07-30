import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  oldPassword:boolean=true;
  newPassword:boolean=true;
  confirmPassword:boolean=true;
  changePasswordForm:any=FormGroup;
  isLoading=false;
  responseMesssage:any;
  constructor(private formBuilder:FormBuilder,private userService:UserService,
    public dialogRef:MatDialogRef<ChangePasswordComponent>,private snackbar:SnackbarService){
  }
  ngOnInit(): void {
  this.changePasswordForm=this.formBuilder.group({
    oldPassword : [null,Validators.required],
    newPassword : [null,Validators.required],
    confirmPassword : [null,Validators.required]
  })
  }
validateSubmit():boolean{
  if(this.changePasswordForm.controls["newPassword"]==this.changePasswordForm.contrls("confirmPassword")){
    return true;
  }else{
    return false;
  }
}
handleSubmit(){
  this.isLoading=true;
  var formData= this.changePasswordForm.value;
  var data = {
    oldPassword : formData.oldPassword,
    newPassword : formData.newPassword,
    confirmPassword : formData.confirmPassword
  }
  this.userService.changePassword(data).subscribe({
    next:(res:any)=>{
this.isLoading=false;
this.responseMesssage=res?.message;
this.dialogRef.close();
this.snackbar.openSnackBar(this.responseMesssage,"success");

    },
    error:(err:any)=>{
this.isLoading=false;
if(err.error?.message){
  this.responseMesssage=err.error?.message
}else{
  this.responseMesssage="Something went wrong";
}
this.dialogRef.close();
this.snackbar.openSnackBar(this.responseMesssage,"success");
    }
  })  
}

}
