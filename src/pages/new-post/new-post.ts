import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user';
import { PostProvider } from '../../providers/post/post';
import { NgForm } from '@angular/forms';
 
@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {
 
  public user: User;
  public postPhoto = "";
  
  private base64Content = "";
  private cameraConfig: CameraOptions = {
    quality: 10,
    destinationType: this.camera.DestinationType.DATA_URL,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  }
 
  constructor(private userProvider: UserProvider,
              private postProvider: PostProvider,
              private nav: NavController,
              private toast: ToastController, 
              private auth: AuthProvider, 
              private camera: Camera) {
  }
 
  ionViewWillEnter() {
    this.loadUser();
  }
 
 
  takePicture() {
    this.camera.getPicture(this.cameraConfig).then(base64 => {
      this.base64Content = base64;
      this.postPhoto = "data:image/jpeg;base64," +base64;
    }, () => {})
  }
 
 
  createPost(form: NgForm) {
    this.postProvider.create(this.base64Content, form.value.description).then((response: any) => {
      this.nav.parent.select(0);
      this.toast.create({ message: "Post created successfully", duration: 3000 }).present();
      this.postPhoto = "";
    }, (response: any) => {
      response.error.errors.forEach(error => this.toast.create({ message: error, duration: 2000 }).present())
    })
  }
 
  
  private loadUser() {
    this.userProvider.load(this.auth.currentUser.id)
      .then((user: User) => {
        this.user = user;
      });
  }
}