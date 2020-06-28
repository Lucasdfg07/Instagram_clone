import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
 
@IonicPage()
@Component({
  selector: 'page-sign-out',
  templateUrl: 'sign-out.html',
})
export class SignOutPage {
 
  constructor(private auth: AuthProvider, private navCtrl: NavController) {}
 
  confirmLogout(){
    this.auth.logout();
  }
 
  denyLogout(){
    this.navCtrl.parent.select(0);
  }
}