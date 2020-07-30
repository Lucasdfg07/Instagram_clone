import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user';
import { Post } from '../../models/post';
 
@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {
 
  public user: User;
  public post: Post;
  private cameraConfig: CameraOptions = {
    quality: 100,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  }
 
  constructor(private userProvider: UserProvider, 
              private auth: AuthProvider, 
              private camera: Camera) {
  }
 
  ionViewWillEnter() {
    this.loadUser();
  }
 
 
  takePicture() {
    this.camera.getPicture(this.cameraConfig).then(uri => console.log(uri), () => {})
  }
 
  
  private loadUser() {
    this.userProvider.load(this.auth.currentUser.id)
      .then((user: User) => {
        this.user = user;
      });
  }
}