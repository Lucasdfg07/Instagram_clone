import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignOutPage } from './sign-out';
import { ComponentsModule } from '../../components/components.module';
 
@NgModule({
  declarations: [
    SignOutPage,
  ],
  imports: [
    IonicPageModule.forChild(SignOutPage),
    ComponentsModule
  ],
})
export class SignOutPageModule {}