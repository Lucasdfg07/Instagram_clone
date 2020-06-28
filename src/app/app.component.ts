import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = "SignInPage";
 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
 
    this.auth.config(() => {
      this.rootPage = "TabsPage";
    }, () => {
      this.rootPage = "SignInPage";
    });
 
    this.auth.checkLogin();
  }
}