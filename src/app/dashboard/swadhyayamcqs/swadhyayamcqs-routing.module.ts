import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwadhyayamcqsPage } from './swadhyayamcqs.page';

const routes: Routes = [
  {
    path: '',
    component: SwadhyayamcqsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwadhyayamcqsPageRoutingModule {}
