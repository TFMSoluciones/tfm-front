import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UgcsRoutingModule } from './ugcs-routing.module';
import { LicensesComponent } from './licenses/licenses.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UgcsMainComponent } from './ugcs-main/ugcs-main.component';


@NgModule({
  declarations: [
    LicensesComponent,
    MainPageComponent,
    UgcsMainComponent
  ],
  imports: [
    CommonModule,
    UgcsRoutingModule
  ]
})
export class UgcsModule { }
