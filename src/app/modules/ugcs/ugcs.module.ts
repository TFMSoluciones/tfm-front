import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UgcsRoutingModule } from './ugcs-routing.module';
import { LicensesComponent } from './licenses/licenses.component';


@NgModule({
  declarations: [
    LicensesComponent
  ],
  imports: [
    CommonModule,
    UgcsRoutingModule
  ]
})
export class UgcsModule { }
