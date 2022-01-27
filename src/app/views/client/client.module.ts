import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    DashboardComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatGridListModule
  ]
})
export class ClientModule { }
