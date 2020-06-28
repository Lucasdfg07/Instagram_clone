import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from "@ionic/storage";
import { ToastController } from 'ionic-angular';
import { API_URL } from '../../constants';
 
@Injectable()
export class AuthProvider {
 
  private ifSignedIn = () => { };
  private ifSignedOut = () => { };
  private _currentUser: {} = null;
 
  constructor(private http: HttpClient, private storage: Storage, private toastr: ToastController) { }
 
 
  config(ifSignedIn = () => { }, ifSignedOut = () => { }) {
    this.ifSignedIn = ifSignedIn;
    this.ifSignedOut = ifSignedOut;
  }
 
 
  checkLogin() {
    this.storage.get('user').then((user) => {
      this._currentUser = user;
      if (this._currentUser == null) {
        this.ifSignedOut();
      } else {
        this.ifSignedIn();
      }
    });
  }
 
 
  login(email: string, password: String) {
    this.http.post(`${API_URL}/users/sign_in`, { user: { email: email, password: password } })
      .subscribe((data) => {
        this.setUser(data);
        this.ifSignedIn();
      }, (data) => { this.showToast(data.error.error) });
  }
 
 
  signUp(user) {
    this.http.post(`${API_URL}/users`, { user: user }).subscribe((data) => {
      this.ifSignedIn();
      this.setUser(data);
      this.showToast("Signed up successfully", 2000);
    }, (data) => { this.showToast(data.error.error) });
  }
 
 
  private setUser(user) {
    this._currentUser = user;
    this.storage.set('user', user);
  }
 
 
  private showToast(message, duration = 5000) {
    this.toastr.create({
      message: message,
      duration: duration
    }).present();
  }

  logout() {
    this.storage.remove('user');
    this._currentUser = null;
    this.ifSignedOut();
    this.showToast("Signed out successfully", 2000);
  }
}