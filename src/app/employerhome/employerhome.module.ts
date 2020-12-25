import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployerhomePageRoutingModule } from './employerhome-routing.module';

import { EmployerhomePage } from './employerhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployerhomePageRoutingModule
  ],
  declarations: [EmployerhomePage]
})
export class EmployerhomePageModule {}
