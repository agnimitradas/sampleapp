import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from "../shared/pages.export";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[ RegisterService ]
})
export class RegisterComponent implements OnInit {

  formInput:any={
    "name": "",
    "emailId": "",
    "pwd": "",    
    "contactNo": null,
    "aadharNo": null
    }
  constructor(private _router:Router,private _registerService:RegisterService) { }

  ngOnInit() { }

  goToLogin(){
      this._router.navigate(['login']);
  }

  submitNew(){
    this._registerService.doRegister(this.formInput)
          .subscribe(data=>{
              alert("Registration Successful");
              this._router.navigate(['login']);
          },
          error=>{
              alert("Registration Failed! Please Try again");
          })
  }

}
