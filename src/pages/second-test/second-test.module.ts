import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondTestPage } from './second-test';

@NgModule({
  declarations: [
    SecondTestPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondTestPage),
  ],
})
export class SecondTestPageModule {}
