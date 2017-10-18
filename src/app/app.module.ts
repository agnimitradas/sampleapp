import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewMatchComponent } from './new-match/new-match.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppActivatorService } from "./app-activator.service";
import { RoutesService } from "./shared/pages.export";

const route=[
      {path:' ', redirectTo: 'home', pathMatch:'full'},
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'home', component:HomeComponent},
      {path:'addnew', component:NewMatchComponent},
      {path:'**', redirectTo: 'home', pathMatch:'full'}
    ];

@NgModule({
  declarations: [
    AppComponent,
    NewMatchComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule ,
    RouterModule.forRoot(route)
  ],
  providers: [AppActivatorService,RoutesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
