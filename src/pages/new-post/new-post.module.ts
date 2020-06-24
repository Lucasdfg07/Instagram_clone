import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPostPage } from './new-post';
import { ComponentsModule } from '../../components/components.module';
 
@NgModule({
  declarations: [
    NewPostPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPostPage),
    ComponentsModule
  ],
})
export class NewPostPageModule {}