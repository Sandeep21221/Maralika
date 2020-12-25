import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'aksharamala/:id',
    loadChildren: () => import('./aksharamala/aksharamala.module').then( m => m.AksharamalaPageModule)
  },
  {
    path: 'video lessons/:id',
    loadChildren: () => import('./videolessons/videolessons.module').then( m => m.VideolessonsPageModule)
  },
  {
    path: 'swadhyaya mcqs/:id',
    loadChildren: () => import('./swadhyayamcqs/swadhyayamcqs.module').then( m => m.SwadhyayamcqsPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
