import { BASE_URL } from './../../utils/app.constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl:any = BASE_URL;
  reqestObj:any;
  constructor(private http:HttpClient) { }

  get(uri:string){
    return this.http.get(`${this.baseurl}/${uri}`);
  }
  post(uri:string, payload?:any){
    if(payload){
      this.reqestObj = {
        "filters": payload
      }
    } else {
      this.reqestObj = {};
    }
    return this.http.post(`${this.baseurl}/${uri}`, this.reqestObj);
  }
}
