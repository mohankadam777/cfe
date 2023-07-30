import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private userService:UserService,
    private router :Router,
    private snackbar:MatSnackBar) { }
    canActivate(route:ActivatedRouteSnapshot):boolean{
      let returnMessage:boolean =true;
      
      this.userService.checkTokens().subscribe({res:(res:any)=>{
      console.log("in routegaurd");
        console.log(res);
        returnMessage=true
      },
    error:(error:any)=>{
      console.log(error);
      returnMessage=false;
    ;
    }})
 
    return returnMessage;
    }
}
   //   let expectedRoleArray=route.data;
    //   expectedRoleArray=expectedRoleArray.expectedRole;

    //   let token=localStorage.getItem("token");
    //   var payload:any;
    //  try {
    //    console.log(token);
    //    let tokenPayloadRole=token;
       
    //  } catch (error) {
    //   localStorage.clear();
    //   this.router.navigate(["/"]);
    //  }
    //  let expectedRole="";
    // //  for(let i=0; i<expectedroleArray['length']; i++){

    // //  }