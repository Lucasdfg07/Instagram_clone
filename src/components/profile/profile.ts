import { Component, Input } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user';
 
@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent {
 
  @Input() public user: User;
  @Input() public isMe = false;
 
}