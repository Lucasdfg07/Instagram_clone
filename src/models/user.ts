export class User {
  constructor(private _id: number, private _name: string, private _email: string, private _photoUrl: string,
              private _description: string = "", private _counting: any = {}) {}
 
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
    if(this._counting.hasOwnProperty('followers')) return this._counting.followers;
    return 0;
  }
 
  get followingsCount() {
    if (this._counting.hasOwnProperty('followings')) return this._counting.followings;
    return 0;
  }
 
  get postsCount() {
    if (this._counting.hasOwnProperty('posts')) return this._counting.posts;
    return 0;
  }
}