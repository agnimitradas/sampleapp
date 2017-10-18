import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AppActivatorService {

  constructor(private _router:Router) { }

  canActivate(){
        console.log("Inside Route Guard");
        //redirect based on token auth
  }
}
