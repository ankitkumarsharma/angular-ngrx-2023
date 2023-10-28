import { logout } from './../actions/auth.actions';
import { sendEmptyAction } from './../../../core/state/actions/common.actions';
import { AuthService } from './../services/auth.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as authAction from "../actions/auth.actions";
import {map, switchMap} from "rxjs/operators"
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
@Injectable()
export class AuthEffects {
    constructor(private _actions$: Actions, private _authService:AuthService, private _store:Store<any>, private _route:Router){}
    getLogin$ = createEffect(()=> 
        this._actions$.pipe(
            ofType(authAction.getLoginAction.type),
            switchMap(({payload})=>{
                return this._authService.login(payload).pipe(
                    map((data:any)=>{
                        console.log(data)
                        if(data == undefined){
                            // this._store.dispatch(
                            //     authAction.saveLoginAction({payload: json})
                            // )
                            return sendEmptyAction();
                        } else {
                            this._route.navigate(['/landing'])
                            return authAction.saveLoginAction({payload: data});
                        }
                    })
                )
            })
        )
    );

    logout$ = createEffect(()=> 
        this._actions$.pipe(
            ofType(authAction.logout.type),
            switchMap(()=>{
                this._store.dispatch(authAction.resetState());
                this._route.navigate(['/auth']);
                return EMPTY
            })
        ),
        {dispatch: false}
    );
}
