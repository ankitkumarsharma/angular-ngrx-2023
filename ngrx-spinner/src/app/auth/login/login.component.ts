import { AuthService } from './../core/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginType } from '../core/config/auth.types';
import { getLoginAction } from '../core/actions/auth.actions';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  submitted!:boolean;
  unsubscribe = new Subject();
  constructor(private _fb:FormBuilder, private _store:Store<any>, private _route:Router) { }

  ngOnInit(): void {
    this.formInit();
    this._store.select("auth","isAuth").pipe(takeUntil(this.unsubscribe)).subscribe((data:any)=>{
      if(data){
        this._route.navigate(['/landing'])
      } else {
        this._route.navigate(['/auth'])
      }
    })
  }
  get fc(){
    return this.loginForm.controls;
  }
  formInit(){
    this.loginForm = this._fb.group({
      username:['', Validators.required],
      password:['', Validators.required],
    });
  }
  onSubmit(value:LoginType){
    this.submitted = true;
    if(this.loginForm.valid){
      this.submitted = false;
      this._store.dispatch(getLoginAction({payload: value}));
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  resetForm(){
    this.loginForm.reset();
    this.submitted = false; 
  }
  ngOnDestroy(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}

