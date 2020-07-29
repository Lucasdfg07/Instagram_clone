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
 
  constructor(private userProvider: UserProvider,
    private postProvider: PostProvider,
    private params: NavParams) { }
 
  ionViewWillEnter() {
    this.loadUser();
    this.loadPosts();
  }
 
 
  private loadUser() {
    this.userProvider.load(this.params.get('id'))
      .then((user: User) => {
        this.user = user;
      });
  }
 
 
  private loadPosts() {
    this.postProvider.userPosts(this.params.get('id'))
      .then((posts: Post[]) => {
        this.posts = posts;
      });
  }
 
}