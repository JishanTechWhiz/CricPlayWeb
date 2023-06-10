import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizerDashPageRoutingModule } from './organizer-dash-routing.module';

import { OrganizerDashPage } from './organizer-dash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizerDashPageRoutingModule
  ],
  declarations: [OrganizerDashPage]
})
export class OrganizerDashPageModule {}
