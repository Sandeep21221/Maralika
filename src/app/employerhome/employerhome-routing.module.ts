import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployerhomePage } from './employerhome.page';

const routes: Routes = [
  {
    path: '',
    component: EmployerhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployerhomePageRoutingModule {}
