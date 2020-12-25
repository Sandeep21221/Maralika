import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamViewPage } from './exam-view.page';

const routes: Routes = [
  {
    path: '',
    component: ExamViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamViewPageRoutingModule {}
