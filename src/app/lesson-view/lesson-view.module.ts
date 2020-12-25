import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonViewPageRoutingModule } from './lesson-view-routing.module';

import { LessonViewPage } from './lesson-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonViewPageRoutingModule
  ],
  declarations: [LessonViewPage]
})
export class LessonViewPageModule {}
