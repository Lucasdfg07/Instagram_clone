import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
 
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
 
  constructor(private auth: AuthProvider, private navCtrl: NavController) { }
 
  onSignUp(form: NgForm) {
    this.auth.signUp(form.value);
  }
 
  backToLoginPage(){
    this.navCtrl.pop();
  }
 
}