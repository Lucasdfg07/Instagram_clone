import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HeaderComponent } from './header/header';
 
@NgModule({
	declarations: [HeaderComponent],
	imports: [IonicModule],
	exports: [HeaderComponent]
})
export class ComponentsModule {}