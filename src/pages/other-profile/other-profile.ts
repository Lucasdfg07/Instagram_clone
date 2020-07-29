import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { PostProvider } from '../../providers/post/post';
import { User } from '../../models/user';
import { Post } from '../../models/post';
 
@IonicPage({
  name: 'user-page',
  segment: 'user/:id'
})
 
@Component({
  selector: 'page-other-profile',
  templateUrl: 'other-profile.html',
})
export class OtherProfilePage {
 
  public user: User;
  public posts: Post[];
  public isFollowing: boolean = false;
 
  constructor(private userProvider: UserProvider,
    private postProvider: PostProvider,
    private params: NavParams) { }
 
  ionViewWillEnter() {
    this.loadUser();
    this.loadPosts();
  }
 
 
  follow() {
    this.userProvider.follow(this.user).then(() => {
      this.isFollowing = true;
    });
  }
 
 
  unfollow() {
    this.userProvider.unfollow(this.user).then(() => {
      this.isFollowing = false;
    });
  }
 
 
  private loadUser() {
    this.userProvider.load(this.params.get('id'))
      .then((user: User) => {
        this.user = user;
        this.isFollowing = user.isFollowing;
      });
  }
 
 
  private loadPosts() {
    this.postProvider.userPosts(this.params.get('id'))
      .then((posts: Post[]) => {
        this.posts = posts;
      });
  }
}