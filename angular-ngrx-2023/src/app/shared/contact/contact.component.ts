import { logout } from '../../auth/core/store/auth.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private _store:Store<any>) { }

  ngOnInit(): void {
  }
  onLogout(){
    this._store.dispatch(logout());
  }
}
