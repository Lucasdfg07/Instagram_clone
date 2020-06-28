import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
import { API_URL } from '../../constants';
 
@Injectable()
export class PostProvider {
 
  constructor(private http: HttpClient, private auth: AuthProvider) {}
 
  async homePosts(){
    const data: any = await this.http.get(`${API_URL}/api/v1/home`, { headers: this.auth.authHeader() }).toPromise();
    return this.formatPost(data);
  }
 
 
  private formatPost(data){
    let posts: { id: number, photo_url: string, description: string, user: {}, hashtags: any[] }[] = [];
    for(let post of data.data) {
      const post_to_include = this.preparePostObject(post, data);
      posts.push(post_to_include);
    }
    return posts;
  }
 
 
  private preparePostObject(post, data) {
    post.attributes["user"] = this.includeUser(post.relationships.user.data, data.included);
    post.attributes["hashtags"] = this.includeHashtags(post.relationships.hashtags.data, data.included);
    return post.attributes;
  }
 
 
  private includeUser(user_data: any, included_data: any) {
    return included_data.filter(included => {
      return included.type == "user" && included.id == user_data.id
    }).map(user => {
      return user.attributes;
    });
  }
 
 
  private includeHashtags(post_hashtags: any, included_data: any) {
    let hashtags_ids = post_hashtags.map(hashtags => { return hashtags.id });
    return included_data.filter(included => {
      return included.type == "hashtag" && this.isThereHashtagId(hashtags_ids, included.id)
    }).map(hashtag => {
      return hashtag.attributes;
    });
  }
 
 
  private isThereHashtagId(hashtags, id) {
    return hashtags.some(hashtag_id => { 
      return hashtag_id == id 
    });
  }
}