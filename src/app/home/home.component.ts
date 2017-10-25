import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeInfoService } from "../shared/pages.export";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeInfoService]
})
export class HomeComponent implements OnInit {
    display: any='none';
    matchData:any;  
    populateModal:any={
      "from": "",
      "to": "",
      "doj": "",
      "status": "",
      "partner": {}    
    };

  constructor(private _router:Router,private _homeInfoService:HomeInfoService) { }

  ngOnInit() {
    let loggedInFlag = !!localStorage.getItem('user');
    if(!loggedInFlag){
      this._router.navigate(['login']);
    }else{
      this._homeInfoService.getAllMatches()
          .subscribe(data=>{
              console.log(data);
            this.matchData = data;
          },error=>{
              console.log(error);
          });
    }
  }

  openModal(data){
    console.log(data);
    this.populateModal = data;
    this.display='block'; 
  }

  onCloseHandled(){
    this.display='none'; 
}

}
