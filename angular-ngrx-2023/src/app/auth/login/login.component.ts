import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthAction from "../core/store/auth.actions";
import { Subject, takeUntil } from 'rxjs';
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
  loginFormError(control:any, required?:boolean){
    if(required){
      return this.submitted && this.loginForm.controls[control].hasError('required');
    } else {
      return this.submitted && this.loginForm.controls[control].errors;
    }
    
  }
  formInit(){
    this.loginForm = this._fb.group({
      username:['', Validators.required],
      password:['', Validators.required],
    });
  }
  onSubmit(value:any){
    this.submitted = true;
    if(this.loginForm.valid){
      this.submitted = false;
      this._store.dispatch(AuthAction.loginRequestAction({payload: value}));
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  resetForm(){
    this.loginForm.reset();
    this.submitted = false; 
  }
  ngOnDestroy(){
    this.unsubscribe.next(0);
    this.unsubscribe.complete();
  }

}
