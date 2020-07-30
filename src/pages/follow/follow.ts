import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { UserProvider } from '../../providers/user/user';
 
@IonicPage()
@Component({
  selector: 'page-follow',
  templateUrl: 'follow.html',
})
export class FollowPage {
 
  currentItem = "followers";
  followers: User[] = [];
  followings: User[] = [];
  user: User;
 
  constructor(private params: NavParams, private nav: NavController, private userProvider: UserProvider) {}
 
  ionViewWillEnter() {
    this.user = this.params.get('user');
    this.loadFollows();
  }
 
 
  goToUserPage(user: User) {
    this.nav.push('user-page', { id: user.id });
  }
 
 
  private loadFollows() {
    this.userProvider.loadFollows(this.user).then(response => {
      this.followers = response.followers;
      this.followings = response.followings;
    });
  }
 
}