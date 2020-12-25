import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AksharamalaPage } from './aksharamala.page';

const routes: Routes = [
  {
    path: '',
    component: AksharamalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AksharamalaPageRoutingModule {}
