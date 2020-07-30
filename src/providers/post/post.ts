import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
import { API_URL } from '../../constants';
import { Post } from '../../models/post';
import { PostFormatter } from './post_formatter';
 
@Injectable()
export class PostProvider {
 
  constructor(private http: HttpClient, private auth: AuthProvider) {}
 
  async homePosts(){
    const data: any = await this.http.get(`${API_URL}/api/v1/home`, { headers: this.auth.authHeader() }).toPromise();
    return this.formatPost(data);
  }
 
 
  private formatPost(data){
    let posts: Post[] = [];
    for(let post of data.data.reverse()) {
      const postFormatter = new PostFormatter(post, data.included);
      posts.push(postFormatter.call());
    }
    return posts;
  }

  async userPosts(userId) {
    const response: any = await this.http.get(`${API_URL}/api/v1/users/${userId}/posts`, { headers: this.auth.authHeader() }).toPromise();
    return this.formatPost(response);
  }

  async create(photo, description) {
    const post = { photo_base64: photo, description: description }
    const response: any = await this.http.post(`${API_URL}/api/v1/posts`, { post: post}, { headers: this.auth.authHeader() }).toPromise();
    return response;
  }

  async like(post) {
    const response: any = await this.http.post(`${API_URL}/api/v1/posts/${post.id}/likes`, {}, { headers: this.auth.authHeader() })
                                    .toPromise();
    return response;
  }
  
  async unlike(post) {
    const response: any = await this.http.delete(`${API_URL}/api/v1/posts/${post.id}/unlikes`, { headers: this.auth.authHeader() })
      .toPromise();
    return response;
  }

  async remove(post) {
    const response: any = await this.http.delete(`${API_URL}/api/v1/posts/${post.id}`, { headers: this.auth.authHeader() })
      .toPromise();
    return response;
  }
 
}