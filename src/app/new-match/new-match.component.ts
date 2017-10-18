import { Component, OnInit } from '@angular/core';
import { RoutesService, NewMatchService } from '../shared/pages.export';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css'],
  providers:[NewMatchService]
})
export class NewMatchComponent implements OnInit {

  routes:any;

  formInput:any={
    route:'R1',
    pickup:'',
    destination:'',
    doj:'',
    havingTruckOption:'',
    truckType:'T1',
    spacesRequired:'L1',
    truckno:'',
    licenseNo:''
  }
  constructor(private _routesService:RoutesService, private _newMatchService:NewMatchService,private _router:Router) { }

  ngOnInit() {
    let loggedInFlag = !!localStorage.getItem('user');
    if(!loggedInFlag){
      this._router.navigate(['login']);
    }else{
      this._routesService.getRoutesNames()
            .subscribe(data=>{
              this.routes = data;
            },error=>{
              console.log(error);
            })
    }
  }

  submitNew(personForm){
    this.formInput.pickup = JSON.parse(localStorage.getItem('pickup'));
    this.formInput.destination = JSON.parse(localStorage.getItem('destination'));
    this.formInput.user = JSON.parse(localStorage.getItem('user'));
    //console.log(this.formInput);
    this._newMatchService.submitNewReq(this.formInput)
          .subscribe(data=>{
              alert("Booking Created! You'll get text once matched");
              this._router.navigate(['home']);
          },error=>{
              alert("Failed to create Booking");
          })
  }

  reset(personForm){
    personForm.reset();
  }

}
