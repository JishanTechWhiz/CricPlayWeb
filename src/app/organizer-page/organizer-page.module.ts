import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizerPagePageRoutingModule } from './organizer-page-routing.module';

import { OrganizerPagePage } from './organizer-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OrganizerPagePageRoutingModule
  ],
  declarations: [OrganizerPagePage]
})
export class OrganizerPagePageModule {}
