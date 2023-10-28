import { Action, ActionReducer, combineReducers } from '@ngrx/store';
import * as userAccountDashboard from '../../user-account-dashboard/core/reducers/user-account-dashboard.reducers';
import * as userAccountDetails from '../../user-account-details/core/reducers/user-account-details.reducers';

export const userAccountKey = "userAccount";
const userAccountReducers = {
    userAccountDashboard: userAccountDashboard.reducer,
    userAccountDetails: userAccountDetails.reducer,
}
const localReducer: ActionReducer<any> = combineReducers(userAccountReducers);
export function reducer(state:any | undefined, action: Action){
    return localReducer(state, action);
}