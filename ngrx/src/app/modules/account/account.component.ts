import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { dummyDataChange } from './user-account/user-account-dashboard/core/actions/user-account-dashboard.actions';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private _route:Router, private _store:Store<any>) { }

  ngOnInit(): void {
  }
  onDash(){
    this._store.dispatch(dummyDataChange());
    this._route.navigate(['/account/user-account/dashboard',"12"])
  }
}
