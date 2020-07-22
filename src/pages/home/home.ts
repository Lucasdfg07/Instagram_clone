import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { Post } from '../../models/post';
 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public posts: Post[] = [];
 
  constructor(private postProvider: PostProvider) {}
 
  ionViewWillEnter(){
    const homePosts = this.postProvider.homePosts();
    homePosts.then(response => {
      this.posts = <Post[]>response;
    })
  } 
}