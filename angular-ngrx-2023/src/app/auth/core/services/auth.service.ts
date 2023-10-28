import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { LOGIN_DATA } from '../constants/auth.constants';
import { LoginRequestModel } from '../model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = 'xyz.com';
  constructor(private httpClient: HttpClient) { }

  getLoginData(payload:LoginRequestModel){
    return of(LOGIN_DATA);
  }
}
