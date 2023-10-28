import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, exhaustMap, map, mergeMap, of, switchMap } from "rxjs";
import * as AuthAction from "./auth.actions";
import { AuthService } from "../services/auth.service";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private store:Store, private route:Router){}

  loginRequest$ = createEffect(
    ()=>
    this.actions$.pipe(
      ofType(
      AuthAction.loginRequestAction),
      mergeMap((action) => {
        return this.authService.getLoginData(action.payload).pipe(
          map((res:any)=>{
            return AuthAction.loginResponseAction({payload: res})
          }),
          catchError((error) => of(AuthAction.loginErrorAction(error)))
        )
      })
      )
  );

  logout$ = createEffect(()=> 
        this.actions$.pipe(
            ofType(AuthAction.logout),
            mergeMap(()=>{
                this.store.dispatch(AuthAction.resetState());
                this.route.navigate(['/auth']);
                return EMPTY
            })
        ),
        {dispatch: false}
    );

}
