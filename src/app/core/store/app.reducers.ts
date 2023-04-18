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

export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
]