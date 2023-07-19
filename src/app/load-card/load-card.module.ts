import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadCardPageRoutingModule } from './load-card-routing.module';

import { LoadCardPage } from './load-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadCardPageRoutingModule
  ],
  declarations: [LoadCardPage]
})
export class LoadCardPageModule {}
