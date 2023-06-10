import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinFormPageRoutingModule } from './join-form-routing.module';

import { JoinFormPage } from './join-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    JoinFormPageRoutingModule
  ],
  declarations: [JoinFormPage]
})
export class JoinFormPageModule {}
