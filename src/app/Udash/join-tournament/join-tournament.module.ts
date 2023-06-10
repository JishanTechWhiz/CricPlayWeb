import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinTournamentPageRoutingModule } from './join-tournament-routing.module';

import { JoinTournamentPage } from './join-tournament.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoinTournamentPageRoutingModule
  ],
  declarations: [JoinTournamentPage]
})
export class JoinTournamentPageModule {}
