import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { NavController } from 'ionic-angular';
 
@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent {
 
  @Input() public user: User;
  @Input() public isMe = false;
  @Input() public isFollowing = false;
 
  @Output() public onFollow = new EventEmitter();
  @Output() public onUnfollow = new EventEmitter();
 
  constructor(private nav: NavController) {}
 
  checkFollow(following: boolean) {
    if(following) {
      this.onFollow.emit();
    } else {
      this.onUnfollow.emit();
    }
  }
 
  openFollowPage() {
    this.nav.push('FollowPage', { user: this.user } );
  }
}