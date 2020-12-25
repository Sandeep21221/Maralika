import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkshcoursePage } from './akshcourse.page';

const routes: Routes = [
  {
    path: '',
    component: AkshcoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkshcoursePageRoutingModule {}
