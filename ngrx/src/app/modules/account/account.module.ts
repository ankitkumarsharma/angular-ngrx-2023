import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { StoreModule } from '@ngrx/store';
import { AccountEffects } from './core/effects';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { accountReducers, metaReducers } from './core/reducers';


@NgModule({
  declarations: [
    AccountComponent,
    AccountDashboardComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    StoreModule.forFeature("account", accountReducers, {metaReducers}),
    EffectsModule.forFeature(AccountEffects)
  ]
})
export class AccountModule { }
