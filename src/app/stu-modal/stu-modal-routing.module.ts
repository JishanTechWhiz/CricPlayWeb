import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuModalPage } from './stu-modal.page';

const routes: Routes = [
  {
    path: '',
    component: StuModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuModalPageRoutingModule {}
