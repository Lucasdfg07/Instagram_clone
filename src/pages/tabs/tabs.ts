import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  home: string = "HomePage";
  profile: string = "MyProfile";
  post: string = "NewPostPage";
  search: string = "SearchPage";
  logout: string = "SignOutPage";
}