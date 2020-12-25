import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AksharamalaPageRoutingModule } from './aksharamala-routing.module';

import { AksharamalaPage } from './aksharamala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AksharamalaPageRoutingModule
  ],
  declarations: [AksharamalaPage]
})
export class AksharamalaPageModule {}
