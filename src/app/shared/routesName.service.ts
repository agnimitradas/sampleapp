import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class RoutesService {

    constructor(private _http:Http) { }

    getRoutesNames():Observable<any>{
        return this._http.get("../../assets/data/routes.json")
                        .map((response:Response)=>{
                            return response.json();
                        })
    }
}