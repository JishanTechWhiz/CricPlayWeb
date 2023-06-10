import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinTournamentPage } from './join-tournament.page';

const routes: Routes = [
  {
    path: '',
    component: JoinTournamentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinTournamentPageRoutingModule {}
