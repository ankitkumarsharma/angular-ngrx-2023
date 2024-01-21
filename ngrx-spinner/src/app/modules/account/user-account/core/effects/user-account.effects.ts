import { UserAccountDetailsEffects } from './../../user-account-details/core/effects/user-account-details.effects';
import { UserAccountDashboardEffects } from './../../user-account-dashboard/core/effects/user-account-dashboard.effects';
export const UserAccountEffects = [
    UserAccountDashboardEffects,
    UserAccountDetailsEffects,
]