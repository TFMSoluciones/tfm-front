import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
