import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AkshcoursePageRoutingModule } from './akshcourse-routing.module';

import { AkshcoursePage } from './akshcourse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AkshcoursePageRoutingModule
  ],
  declarations: [AkshcoursePage]
})
export class AkshcoursePageModule {}
