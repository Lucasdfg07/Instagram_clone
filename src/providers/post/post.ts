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
 
}