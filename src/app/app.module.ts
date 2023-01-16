import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { UgcsMainComponent } from './modules/ugcs/ugcs-main/ugcs-main.component';
import { LicensesComponent } from './modules/ugcs/licenses/licenses.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent},
      { path: 'ugcs/main', component: UgcsMainComponent},
      { path: 'ugcs/licenses', component: LicensesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
