import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HeaderComponent } from './header/header';
import { PostListComponent } from './post-list/post-list';
import { ProfileComponent } from './profile/profile';
import { FollowingComponent } from './following/following';
import { LikeComponent } from './like/like';
 
@NgModule({
	declarations: [HeaderComponent,
    PostListComponent,
    ProfileComponent,
    FollowingComponent,
    LikeComponent],
	imports: [IonicModule],
	exports: [HeaderComponent,
    PostListComponent,
    ProfileComponent,
    FollowingComponent,
    LikeComponent]
})
export class ComponentsModule {}