import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { UserAccountComponent } from './user-account.component';
import { UserAccountDashboardComponent } from './user-account-dashboard/user-account-dashboard.component';
import { UserAccountDetailsComponent } from './user-account-details/user-account-details.component';


@NgModule({
  declarations: [
    UserAccountComponent,
    UserAccountDashboardComponent,
    UserAccountDetailsComponent,
  ],
  imports: [
    CommonModule,
    UserAccountRoutingModule
  ]
})
export class UserAccountModule { }
