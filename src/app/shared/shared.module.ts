import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './componets/tool-bar/tool-bar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    ToolBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
