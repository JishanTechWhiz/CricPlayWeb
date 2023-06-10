import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuModalPageRoutingModule } from './stu-modal-routing.module';

import { StuModalPage } from './stu-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuModalPageRoutingModule
  ],
  declarations: [StuModalPage]
})
export class StuModalPageModule {}
