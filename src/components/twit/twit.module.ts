import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwitComponent } from './twit';

@NgModule({
  declarations: [
    TwitComponent,
  ],
  imports: [
    IonicPageModule.forChild(TwitComponent),
  ],
  exports: [
    TwitComponent
  ]
})
export class TwitComponentModule {}
