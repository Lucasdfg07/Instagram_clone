import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';
import { PostProvider } from '../../providers/post/post';
import { User } from '../../models/user';
import { Post } from '../../models/post';
 
@IonicPage({
  name: 'MyProfile'
})
 
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 
  public currentUser: User;
  public posts: Post[];
 
  constructor(private userProvider: UserProvider, 
              private postProvider: PostProvider, 
              private auth: AuthProvider,
              private nav: NavController) {}
 
  ionViewWillEnter(){
    this.loadUser();
    this.loadPosts(); 
  }
 
 
  newPost() {
    this.nav.parent.select(2);
  }
 
 
  private loadUser(){
    this.userProvider.load(this.auth.currentUser.id)
        .then((user: User) => {
          this.currentUser = user;
        });
  }
 
 
  private loadPosts() {
    this.postProvider.userPosts(this.auth.currentUser.id)
      .then((posts: Post[]) => {
        this.posts = posts;
      });
  }
 
}