import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtherProfilePage } from './other-profile';
import { ComponentsModule } from '../../components/components.module';
 
@NgModule({
  declarations: [
    OtherProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(OtherProfilePage),
    ComponentsModule
  ],
  entryComponents: [
    OtherProfilePage
  ]
})
export class OtherProfilePageModule {}