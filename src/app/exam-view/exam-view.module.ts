import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamViewPageRoutingModule } from './exam-view-routing.module';

import { ExamViewPage } from './exam-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamViewPageRoutingModule
  ],
  declarations: [ExamViewPage]
})
export class ExamViewPageModule {}
