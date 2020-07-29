import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
import { API_URL } from '../../constants';
import { User } from '../../models/user';
 
@Injectable()
export class UserProvider {
 
  constructor(private http: HttpClient, private auth: AuthProvider) { }
 
  async load(userId) {
    const response: any = await this.http.get(`${API_URL}/api/v1/users/${userId}`, { headers: this.auth.authHeader() })
                                    .toPromise();
    return this.formatResponse(response);
  }
 
 
  private formatResponse(response: any): User {
    const attr = response.data.attributes
    return new User(response.data.id, attr.name, attr.email, attr.photo_url, attr.description, { followers: attr.followers_count, followings: attr.followings_count, posts: attr.posts_count });
  }
 
}