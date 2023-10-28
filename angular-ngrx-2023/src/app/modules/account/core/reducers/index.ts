import { AccountStateType } from './../config/account.types';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as accountDashboard from '../../account-dashboard/core/reducers/account-dashboard.reducers';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as userAccount from '../../user-account/core/reducers/user-account.reducers';

export const accountReducers: ActionReducerMap<AccountStateType> = {
    accountDashboard: accountDashboard.reducer,
    userAccount: userAccount.reducer,
}

export function localStorageSyncReducer(
    reducer: ActionReducer<any> 
): ActionReducer<any> {
    return localStorageSync({
        keys: [accountDashboard.accountDashboardKey, userAccount.userAccountKey],
        rehydrate: true,
        storage: sessionStorage,
    })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [
    localStorageSyncReducer,
]