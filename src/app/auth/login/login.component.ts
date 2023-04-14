import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthAction from "../core/store/auth.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private _fb:FormBuilder, private store: Store){}

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = this._fb.group({
      email: [''],
      password: ['']
    })
  }
  onSubmit(){
    this.store.dispatch(AuthAction.loginRequestAction(this.loginForm.value))
  }
}
