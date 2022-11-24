import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { RouterModule, Routes } from '@angular/router';


const myRouter:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"add",
    component:AddEmployeeComponent
  },
  {
    path:"delete",
    component:EmployeeDeleteComponent
  },
  {
    path:"edit",
    component:EmployeeEditComponent
  },
  {
    path:"view",
    component:EmployeeViewComponent
  },
  {
    path:"search",
    component:SearchEmployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    EmployeeDeleteComponent,
    EmployeeEditComponent,
    NavbarComponent,
    EmployeeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
