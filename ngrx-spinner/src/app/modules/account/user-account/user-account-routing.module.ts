import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountDashboardComponent } from './user-account-dashboard/user-account-dashboard.component';
import { UserAccountComponent } from './user-account.component';

const routes: Routes = [
  { path: '', component: UserAccountComponent },
  {path:'dashboard/:id', component: UserAccountDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountRoutingModule { }
