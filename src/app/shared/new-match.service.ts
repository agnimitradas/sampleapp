import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class NewMatchService {

    constructor(private _http:Http) { }

    submitNewReq(data):Observable<any>{
        return this._http.post('http://localhost:3000/matches',data)
                .map((response:Response)=>{
                    return response.json();
                })
    }
}