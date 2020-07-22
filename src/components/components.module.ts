import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HeaderComponent } from './header/header';
import { PostListComponent } from './post-list/post-list';
 
@NgModule({
	declarations: [HeaderComponent,
    PostListComponent],
	imports: [IonicModule],
	exports: [HeaderComponent,
    PostListComponent]
})
export class ComponentsModule {}