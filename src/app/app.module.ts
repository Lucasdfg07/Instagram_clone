import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from "@ionic/storage";
import { Camera } from '@ionic-native/camera';
 
import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { PostProvider } from '../providers/post/post';
import { UserProvider } from '../providers/user/user';
import { OtherProfilePageModule } from '../pages/other-profile/other-profile.module';
import { SearchProvider } from '../providers/search/search';
 
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    OtherProfilePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera,
    AuthProvider,
    PostProvider,
    UserProvider,
    SearchProvider
  ]
})
export class AppModule { }