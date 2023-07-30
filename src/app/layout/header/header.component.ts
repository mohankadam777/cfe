import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/material-component/dialog/change-password/change-password.component';
import { ConfirmationComponent } from 'src/app/material-component/dialog/confirmation/confirmation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  role:any;
  constructor(public dialog:MatDialog,private router : Router){

  }
  
  logout(){
  const dialogConfig=new MatDialogConfig(); 
  dialogConfig.data={
    message:"Logout",
    confirmation:true
  } 
  const dialogRef= this.dialog.open(ConfirmationComponent,dialogConfig);
  const sub = dialogRef.componentInstance.eventStatusChangeEmitter.subscribe({
    response:(response:any)=>{
      dialogRef.close();
      localStorage.clear();
      this.router.navigate(["/"]);
    }
  })
  }
  changePassword(){
  const dialogConfig=new MatDialogConfig(); 
  dialogConfig.width="550px";
  this.dialog.open(ChangePasswordComponent,dialogConfig);

  }

}
