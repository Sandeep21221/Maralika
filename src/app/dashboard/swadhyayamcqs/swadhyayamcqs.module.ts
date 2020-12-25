import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwadhyayamcqsPageRoutingModule } from './swadhyayamcqs-routing.module';

import { SwadhyayamcqsPage } from './swadhyayamcqs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwadhyayamcqsPageRoutingModule
  ],
  declarations: [SwadhyayamcqsPage]
})
export class SwadhyayamcqsPageModule {}
