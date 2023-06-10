import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizerDashPage } from './organizer-dash.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizerDashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizerDashPageRoutingModule {}
