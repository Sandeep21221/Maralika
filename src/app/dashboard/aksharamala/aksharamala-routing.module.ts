import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AksharamalaPage } from './aksharamala.page';

const routes: Routes = [
  {
    path: '',
    component: AksharamalaPage
  },
  {
    path: 'akshcourse',
    loadChildren: () => import('./akshcourse/akshcourse.module').then( m => m.AkshcoursePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AksharamalaPageRoutingModule {}
