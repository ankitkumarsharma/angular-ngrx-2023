import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY, BASE_URL } from 'src/app/core/utils/app.constant';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    request = this.addSession(request);
    const reqHeaders = new HttpHeaders()
    .set('Content-type','application/json')
    .set('Accept','application/json')
    .set('xyz', API_KEY)
    .set('Access-Control-Allow-Origin','*');
    // next.handle(request.clone({setHeaders: {API_KEY}}))
    return next.handle(request.clone({headers: reqHeaders}));   
  }
  addSession(req:HttpRequest<any>){
    const sessionId = {
      env: {
        session: "1234" // sample data
      }
    };
    return req.clone({
      body: {...req.body, ...sessionId}, // add parameters in body
    })
  }
}
