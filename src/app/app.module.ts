import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const appRoute:Routes = [
  {
    path:"",component:AddcourseComponent
  },
  {
    path:"viewall",component:ViewcourseComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    ViewcourseComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
