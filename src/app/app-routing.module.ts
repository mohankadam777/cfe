import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { ConfirmationComponent } from './material-component/dialog/confirmation/confirmation.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:"cafe/dashboard",component:DashboardComponent,canActivate:[RouteGuardService]},
{path:"k",component:ConfirmationComponent},

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
