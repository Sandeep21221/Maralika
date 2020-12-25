import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideolessonsPageRoutingModule } from './videolessons-routing.module';

import { VideolessonsPage } from './videolessons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideolessonsPageRoutingModule
  ],
  declarations: [VideolessonsPage]
})
export class VideolessonsPageModule {}
