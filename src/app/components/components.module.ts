import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from '../_modules/angular-material.module';
import { FormsModule } from '@angular/forms';
import { TeamDirectoryComponent } from './team-directory/team-directory.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TeamDirectoryComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class ComponentsModule { }
