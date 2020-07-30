import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
import { User } from '../../models/user';
import { Post } from '../../models/post';
 
 
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
 
  currentItem = "users";
  users: User[] = [];
  posts: Post[] = [];
 
  constructor(private nav: NavController, private searchProvider: SearchProvider){}
 
  search(ev: any) {
    this.searchProvider.search(ev.target.value).then(response => {
      this.users = response.users;
      this.posts = response.posts;
    }, () => {});
  }
 
 
  goToUserPage(user) {
    this.nav.push('user-page', { id: user.id })
  }
 
 
  writeDescriptionWithHashtags(description) {
    return description.replace(new RegExp(/#\w+/, "gi"), match => {
      return '<b>' + match + '</b>';
    });
  }
 
}