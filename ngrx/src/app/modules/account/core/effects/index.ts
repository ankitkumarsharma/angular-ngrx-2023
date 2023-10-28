import { AccountDashboardEffects } from "../../account-dashboard/core/effects/account-dashboard.effects";
import { UserAccountEffects } from "../../user-account/core/effects/user-account.effects";

export const AccountEffects = [
    AccountDashboardEffects,
    ...UserAccountEffects,
];