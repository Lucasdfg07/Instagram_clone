import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public posts = [];
 
  constructor(private postProvider: PostProvider) {}
 
  ionViewWillEnter(){
    const homePosts = this.postProvider.homePosts();
    homePosts.then(response => {
      this.posts = response;
    })
  }  
}