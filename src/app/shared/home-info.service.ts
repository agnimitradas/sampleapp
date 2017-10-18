import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeInfoService {

data:any = [
          
  ]
    constructor(private _http:Http) { }

    getAllMatches():Observable<any>{
        return this._http.get('http://localhost:3000/upcomingTrips')
                    .map((response:Response)=>{
                        return response.json();
                    });
        
    }
}