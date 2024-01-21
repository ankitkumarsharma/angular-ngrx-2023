import { LoaderStateType } from './../../utils/app.types';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderSubject = new Subject<LoaderStateType>();
  loaderState = this.loaderSubject.asObservable();
  constructor() { }
  show() {
    this.loaderSubject.next(<LoaderStateType>{show: true});
  }
  hide() {
    this.loaderSubject.next(<LoaderStateType>{show: false});
  }
}
