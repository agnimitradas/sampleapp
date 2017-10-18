import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegisterService {
    private url='http://localhost:3000/users';

    constructor(private _http:Http) { }

    doRegister(data):Observable<any>{
        return this._http.post(this.url,data)
                .map((response:Response)=>{
                    console.log(response.json());
                    return response.json();
                });
    }

}