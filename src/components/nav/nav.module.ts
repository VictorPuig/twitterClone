import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavComponent } from './nav';

@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    IonicPageModule.forChild(NavComponent),
  ],
  exports: [
    NavComponent
  ]
})
export class NavComponentModule {}
