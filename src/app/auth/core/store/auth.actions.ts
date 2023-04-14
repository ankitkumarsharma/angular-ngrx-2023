import { createAction, props } from "@ngrx/store";
import * as AuthModel from "../model/auth.model";

export const loginRequestAction = createAction(
  '[Auth] login request action',
  props<{payload: AuthModel.LoginRequestModel}>()
);

export const loginResponseAction = createAction(
  '[Auth] login response action',
  props<{payload: AuthModel.LoginResponseModel}>()
);

export const loginErrorAction = createAction(
  '[Auth] login response error action',
  props<{error: string}>()
);
