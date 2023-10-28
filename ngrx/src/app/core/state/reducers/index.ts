import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import * as auth from "../../../auth/core/reducers/auth.reducers";

export const reducers:ActionReducerMap<any> = {
    auth: auth.reducer,
}

// export function localStorageSyncReducer(
//     reducer: ActionReducer<any> 
// ): ActionReducer<any> {
//     return localStorageSync({
//         keys: [auth.authKey],
//         rehydrate: true,
//         storage: sessionStorage,
//     })(reducer);
// }

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

export const metaReducers: Array<MetaReducer<any,any>> = [
    // localStorageSyncReducer,
    clearState
]