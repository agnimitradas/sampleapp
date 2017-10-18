import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
    private loginUrl='url';

    constructor(private _http:Http) { }

    doAuthenticate(data):Observable<any>{
        return this._http.post(this.loginUrl,data)
                    .map((response:Response)=>{
                        return response.json();
                    })
    }
}