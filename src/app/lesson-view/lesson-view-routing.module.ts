import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonViewPage } from './lesson-view.page';

const routes: Routes = [
  {
    path: '',
    component: LessonViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonViewPageRoutingModule {}
