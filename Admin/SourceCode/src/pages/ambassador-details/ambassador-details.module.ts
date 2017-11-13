import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmbassadorDetailsPage } from './ambassador-details';

@NgModule({
  declarations: [
    AmbassadorDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AmbassadorDetailsPage),
  ],
})
export class AmbassadorDetailsPageModule {}
