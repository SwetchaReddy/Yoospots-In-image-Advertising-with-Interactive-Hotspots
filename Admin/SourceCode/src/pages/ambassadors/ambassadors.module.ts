import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmbassadorsPage } from './ambassadors';

@NgModule({
  declarations: [
    AmbassadorsPage,
  ],
  imports: [
    IonicPageModule.forChild(AmbassadorsPage),
  ],
})
export class AmbassadorsPageModule {}
