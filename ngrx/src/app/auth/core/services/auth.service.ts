import { LoginType } from './../config/auth.types';
import { ApiService } from './../../../core/services/api/api.service';
import { Injectable } from '@angular/core';
import { LOGIN } from '../config/auth.constant';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _api: ApiService) { }

  login(payload:LoginType){
    // return of({userName:"ankit", isAuth: true});
    return this._api.post(LOGIN, payload);
  }
}
