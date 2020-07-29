export class User {
  constructor(private _id: number, private _name: string, private _email: string, private _photoUrl: string,
              private _description: string = "", private _meta: any = {}) {}
 
  get id() {
    return this._id;
  }
 
  get name() {
    return this._name;
  }
 
  get email() {
    return this._email;
  }
 
  get photoUrl() {
    return this._photoUrl;
  }
 
  get description() {
    return this._description;
  }
 
  get followersCount() {
    if (this._meta.hasOwnProperty('followers')) return this._meta.followers;
    return 0;
  }
 
  get followingsCount() {
    if (this._meta.hasOwnProperty('followings')) return this._meta.followings;
    return 0;
  }
 
  get postsCount() {
    if (this._meta.hasOwnProperty('posts')) return this._meta.posts;
    return 0;
  }
 
  get isFollowing() {
    if (this._meta.hasOwnProperty('isFollowing')) return this._meta.isFollowing;
    return false;
  }
}