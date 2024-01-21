import {
  HttpErrorResponse
} from '@angular/common/http';
import { ErrorHandler, Inject, Injectable, Injector, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorHandleInterceptor implements ErrorHandler {

  constructor(private zone: NgZone, @Inject(Injector) private readonly injector: Injector) {} 
  private get toast() {
    return this.injector.get(ToastrService);
  }
  handleError(err: any){
    // check if it's an error from an http response
    if(!(err instanceof HttpErrorResponse)) {
      err = err.rejection;  // get the error object
    }
    this.toast.error(err?.message || 'Undefined client error');
    // console.error('Error from global error handler', err);
  }
}
