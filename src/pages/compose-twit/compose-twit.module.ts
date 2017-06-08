import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComposeTwitPage } from './compose-twit';

@NgModule({
  declarations: [
    ComposeTwitPage,
  ],
  imports: [
    IonicPageModule.forChild(ComposeTwitPage),
  ],
  exports: [
    ComposeTwitPage
  ]
})
export class ComposeTwitPageModule {}
