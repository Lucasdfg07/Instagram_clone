import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HeaderComponent } from './header/header';
import { PostListComponent } from './post-list/post-list';
import { ProfileComponent } from './profile/profile';
 
@NgModule({
	declarations: [HeaderComponent,
    PostListComponent,
    ProfileComponent],
	imports: [IonicModule],
	exports: [HeaderComponent,
    PostListComponent,
    ProfileComponent]
})
export class ComponentsModule {}