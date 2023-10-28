import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';
  isAuth!:boolean;
  constructor(private _store:Store<any>){
    this._store.select("auth","isAuth").subscribe((data)=>{
      this.isAuth = data;
    })
  }
}
