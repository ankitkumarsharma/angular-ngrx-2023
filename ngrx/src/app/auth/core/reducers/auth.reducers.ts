import { Action, createReducer, on } from "@ngrx/store";
import { AuthType } from "../config/auth.types";
import * as authAction from "../actions/auth.actions";

export const authKey = "auth";
export const initialState:AuthType = {
    isAuth: false,
    userName: "",
    roleDetails: {},
    accessPagesList:[]
};

const authReducer = createReducer(
    initialState,
    on(authAction.saveLoginAction, (state, {payload})=>{
        return {
            ...state,
            userName: payload["userName"],
            isAuth: payload["isAuth"]
        }
    }),
    on(authAction.resetLoginAction, (state)=>{
        return {
            ...initialState
        }
    })
);

export function reducer(state: AuthType | undefined, action: Action){
    return authReducer(state, action)
}