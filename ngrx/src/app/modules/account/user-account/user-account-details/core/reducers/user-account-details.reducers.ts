import { Action, createReducer } from "@ngrx/store"; 
import { UserAccountDetailsTypes } from "../config/user-account-details.types";

export const userAccountDetailsKey = "userAccountDetails";
export const initialState: UserAccountDetailsTypes = {
    userDetails: []
}
const userAccountDetailsReducer = createReducer(
    initialState,
    // code
);
export function reducer(state:UserAccountDetailsTypes | undefined, action:Action){
    return userAccountDetailsReducer(state, action);
}