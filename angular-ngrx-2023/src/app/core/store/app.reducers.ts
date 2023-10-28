import { ActionReducer, MetaReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import * as authReducer  from "src/app/auth/core/store/auth.reducers";

export const appReducer = {
  auth: authReducer.authReducer
}
export function localStorageSyncReducer(
  reducer: ActionReducer<any> 
): ActionReducer<any> {
  return localStorageSync({
      keys: [authReducer.authKey],
      rehydrate: true,
      storage: sessionStorage,
  })(reducer);
}

export function clearState(
  reducer: ActionReducer<any> 
): ActionReducer<any> {
  return (state, action) => {
      if(action !== null && action.type === "CLEAR_STATE"){
          return reducer(undefined, {type: "CLEAR_STATE"});
      }
      return reducer(state, action);
  }
}

export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
  clearState
]