import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAmbassadorPage } from './add-ambassador';

@NgModule({
  declarations: [
    AddAmbassadorPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAmbassadorPage),
  ],
})
export class AddAmbassadorPageModule {}
