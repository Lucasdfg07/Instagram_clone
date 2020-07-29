import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HeaderComponent } from './header/header';
import { PostListComponent } from './post-list/post-list';
import { ProfileComponent } from './profile/profile';
import { FollowingComponent } from './following/following';
 
@NgModule({
	declarations: [HeaderComponent,
    PostListComponent,
    ProfileComponent,
    FollowingComponent],
	imports: [IonicModule],
	exports: [HeaderComponent,
    PostListComponent,
    ProfileComponent,
    FollowingComponent]
})
export class ComponentsModule {}