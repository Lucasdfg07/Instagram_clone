import { Component, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'following',
  templateUrl: 'following.html'
})
export class FollowingComponent {
  @Input() isFollowing = false;
  @Output() followEvent = new EventEmitter();
}