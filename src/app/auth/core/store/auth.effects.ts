import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";
import * as AuthAction from "./auth.actions";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService){}

  loginRequest$ = createEffect(
    ()=>
    this.actions$.pipe(
      ofType(
      AuthAction.loginRequestAction),
      mergeMap((action) => {
        return this.authService.getLoginData(action.payload).pipe(
          map((res:any)=>{
            console.log(res)
            alert("Thanks")
            return AuthAction.loginResponseAction({payload: res})
          }),
          catchError((error) => of(AuthAction.loginErrorAction(error)))
        )
      })
      )
  );


}
