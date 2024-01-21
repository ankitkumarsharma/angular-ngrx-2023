import { Action, createReducer, on } from "@ngrx/store"; 
import { dummyDataChange } from "../actions/user-account-dashboard.actions";
import { UserAccountDashboardTypes } from "../config/user-account-dashboard.types";

export const userAccountDashboardKey = "userAccountDashboard";
export const initialState: UserAccountDashboardTypes = {
    userName: null,
    userProfile: ''
}
const userAccountDashboardReducer = createReducer(
    initialState,
    // code
    on(dummyDataChange, (state, {})=>{
        return {
            ...state,
            userName: "Ankit Kumar Sharma",
            userProfile: "Software Engineer"
        }
    }),
);
export function reducer(state:UserAccountDashboardTypes | undefined, action:Action){
    return userAccountDashboardReducer(state, action);
}