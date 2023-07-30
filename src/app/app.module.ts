import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopDivComponent } from './top-div/top-div.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import{MaterialsModule} from "./shared/materials.module";
import { SignupComponent } from './signup/signup/signup.component'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenInterceptorInterceptor } from './shared/token-interceptor.interceptor';
import { MenuItems } from './shared/menu-items';
import { ConfirmationComponent } from './material-component/dialog/confirmation/confirmation.component';
import { HeaderComponent } from './layout/header/header.component';
import { ChangePasswordComponent } from './material-component/dialog/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    TopDivComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    ConfirmationComponent,
    HeaderComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,MaterialsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule,MenuItems,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
