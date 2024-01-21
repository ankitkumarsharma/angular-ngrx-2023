import { Action, createReducer } from "@ngrx/store";
import { AccountDashboardTypes } from "../config/account-dashboard.types";

export const accountDashboardKey = "accountDashboard";
export const initialState: AccountDashboardTypes = {
    userAccount: '',
    clientAccount: ''
}
const accountDashboardReducer = createReducer(
    initialState,
    // code
);
export function reducer(state:AccountDashboardTypes | undefined, action:Action){
    return accountDashboardReducer(state, action);
}