import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomaComponent } from './components';
import { SomaService } from './services';

@NgModule({
  declarations: [
    SomaComponent
  ],

  imports: [
    CommonModule
  ],

  exports:[
    SomaComponent
  ],

  providers: [
    SomaService
  ]
})
export class SomarModule { }
