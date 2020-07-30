import { Component, Input } from '@angular/core';
import { Post } from '../../models/post';
import { NavController, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { PostProvider } from '../../providers/post/post';
import { AuthProvider } from '../../providers/auth/auth';
 
@Component({
  selector: 'post-list',
  templateUrl: 'post-list.html'
})
export class PostListComponent {
 
  @Input() posts: Post[];
  @Input() currentList = "details";
  @Input() showToolbar = false;
 
  constructor(private nav: NavController, 
              private postProvider: PostProvider,  
              private auth: AuthProvider,
              private alert: AlertController){}
 
  changeList(newList) {
    this.currentList = newList;
  }
 
  detailUser(user: User) {
    this.nav.push('user-page', { id: user.id });
  }
 
  writeDescriptionWithHashtags(description) {
    return description.replace(new RegExp(/#\w+/, "gi"), match => {
      return '<b>' + match + '</b>';
    });
  }
 
  like(post) {
    this.postProvider.like(post).then(() => {
      post.isLiked = true;
      post.likeCount += 1;
    })
  }
 
  unlike(post) {
    this.postProvider.unlike(post).then(() => {
      post.isLiked = false;
      post.likeCount -= 1;
    })
  }
 
  isPostOwner(post): boolean {
    return post.owner.id == this.auth.currentUser.id;
  }
 
  remove(post) {
    this.alert.create({
      title: "Remove Post",
      message: "You're about to remove your post. Do you want to proceed?",
      buttons: [
        { text: 'No', role: 'cancel' },
        { text: 'Yes', handler: () => { this.confirmExclusion(post) } }
      ]
    }).present();
  }
 
  confirmExclusion(post) {
    this.postProvider.remove(post).then(() => {
      let postIndex = this.posts.indexOf(post);
      this.posts.splice(postIndex, 1);
      this.alert.create({ title: "Removed", message: "Post successfully removed" }).present();
    }, () => {});
  }
 
}