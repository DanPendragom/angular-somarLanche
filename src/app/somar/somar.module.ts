import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomaComponent } from './components/soma/soma.component';



@NgModule({
  declarations: [
    SomaComponent
  ],

  imports: [
    CommonModule
  ],

  exports:[
    SomaComponent
  ]
})
export class SomarModule { }
