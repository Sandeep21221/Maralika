import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideolessonsPage } from './videolessons.page';

const routes: Routes = [
  {
    path: '',
    component: VideolessonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideolessonsPageRoutingModule {}
