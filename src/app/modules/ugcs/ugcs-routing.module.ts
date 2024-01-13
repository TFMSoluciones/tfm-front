import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicensesComponent } from './licenses/licenses.component';
import { UgcsMainComponent } from './ugcs-main/ugcs-main.component';

const routes: Routes = [
  /* {
    path: 'ugcs',
    children: [
      {
        path: 'main',
        component: UgcsMainComponent
      }
    ]
  }, */
  {
    path: 'main',
    component: UgcsMainComponent
  },
  {
    path: 'licenses',
    component: LicensesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UgcsRoutingModule { }
