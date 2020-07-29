import { Component, Input } from '@angular/core';
import { Post } from '../../models/post';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
 
@Component({
  selector: 'post-list',
  templateUrl: 'post-list.html'
})
export class PostListComponent {
 
  @Input() posts: Post[];
  @Input() currentList = "details";
  @Input() showToolbar = false;
 
  constructor(private nav: NavController){}
 
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
 
}