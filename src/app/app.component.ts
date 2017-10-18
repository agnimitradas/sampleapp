import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loggedInFlag: boolean = false;

  constructor(private _router:Router){  }

  ngOnInit(): void {
    let userData = localStorage.getItem('user');
    this.loggedInFlag = !!userData;
  }

  logout(){
    localStorage.removeItem('user');
    setTimeout(()=>{
          this._router.navigate(['login']);
      },1000)
  }
}
