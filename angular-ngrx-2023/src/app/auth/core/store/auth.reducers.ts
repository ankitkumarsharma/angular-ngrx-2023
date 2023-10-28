import { createReducer, on } from "@ngrx/store";
import { State } from "src/app/core/model/app.model";
import * as AuthAction from "./auth.actions"

export const authKey="auth";
export const initialState: State = {
  token: null,
  user: null,
  isAuth: false
}

const _authReducer = createReducer(
  initialState,
  on(AuthAction.loginResponseAction,(state,{payload})=>{
    console.log(payload)
    console.log(state)
    return {
      ...state,
      isAuth: true,
      token: payload.data.token,
      user: payload.data.user,
    }
  }),
  on(AuthAction.loginErrorAction,(state,{error})=>{
    return {
      ...state,
      error: error,
      token: null,
      user: null,
      isAuth: false
    }
  }),
  on(AuthAction.resetLoginAction, (state)=>{
    return {
        ...initialState
    }
})
)

export function authReducer(state:any, action:any){
  return _authReducer(state, action)
}
