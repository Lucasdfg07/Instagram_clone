import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
 
@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
 
  constructor(private auth: AuthProvider, private navCtrl: NavController) {}
 
  onLogin(form: NgForm) {
    this.auth.login(form.value.email, form.value.password);
  }
 
  goToSignUpPage() {
    this.navCtrl.push("SignUpPage");
  }
 
}