import { createAction, props } from "@ngrx/store";
import { LoginType } from "../config/auth.types";

export const getLoginAction = createAction(
    '[Auth] get login details',
    props<{payload: LoginType}>()
);
export const saveLoginAction = createAction(
    '[Auth] save login details',
    props<{payload: any}>()
);
export const resetLoginAction = createAction(
    '[Auth] reset login details', 
);
export const resetState = createAction('CLEAR_STATE');
export const logout = createAction('LOG_OUT');