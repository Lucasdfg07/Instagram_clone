import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
import { API_URL } from '../../constants';
import { PostFormatter } from '../post/post_formatter';
import { User } from '../../models/user';
import { Post } from '../../models/post';
 
@Injectable()
export class SearchProvider {
 
  constructor(private http: HttpClient, private auth: AuthProvider) { }
 
  async search(search: string) {
    const data: any = await this.http.get(`${API_URL}/api/v1/search?search=${search}`, { headers: this.auth.authHeader() })
                                .toPromise();
   return  { users: this.formatUsersList(data.users), posts: this.formatPost(data.posts) };
  }
 
 
  private formatPost(data) {
    let posts: Post[] = [];
    for (let post of data.data) {
      const postFormatter = new PostFormatter(post, data.included);
      posts.push(postFormatter.call());
    }
    return posts;
  }
 
 
  private formatUsersList(response: any) {
    let users: User[] = [];
    response.data.forEach(element => {
      users.push(this.formatUser(element));
    });
    return users;
  }
 
 
  private formatUser(data) {
    const attr = data.attributes
    return new User(data.id, attr.name, attr.email, attr.photo_url, attr.description,
      {
        followers: attr.followers_count, followings: attr.followings_count,
        isFollowing: attr.is_following, posts: attr.posts_count
      });
  }
}