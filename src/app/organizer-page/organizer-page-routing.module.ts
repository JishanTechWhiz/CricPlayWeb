import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizerPagePage } from './organizer-page.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizerPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizerPagePageRoutingModule {}
