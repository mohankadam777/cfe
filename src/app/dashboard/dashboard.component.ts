import { AfterViewInit, Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { SnackbarService } from '../services/snackbar.service';
import { MenuItems } from '../shared/menu-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  responseMessage:any;
  data:any;
  constructor(private dashboardService:DashboardService,private snackbar:SnackbarService,
    public menuItems:MenuItems,private router :Router ){
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    // this.dashboardDetails();s

  }
  dashboardDetails():void{
     this.dashboardService.getDetails().subscribe({response:(res:any)=>{
      this.data=res
    console.log("success");
    },
      error:(err:any)=>{
        if(err.error?.message){
          this.responseMessage=err.error?.message
        }
        else{
          this.responseMessage="Unauthorised access"
        }
        this.snackbar.openSnackBar(this.responseMessage,"error");
        this.router.navigate(["/"]);
        
      }
     })
  }


}
