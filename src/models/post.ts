import { Hashtag } from "./hashtag";
import { User } from "./user";
 
export class Post {
 
  private _id: number;
  private _photoUrl: string;
  private _description: string;
  private _owner: User;
  private _hashtags: Hashtag[];
 
  constructor(id: number, photoUrl: string, description: string, owner: User, hashtags: Hashtag[]){
    this._id = id;
    this._photoUrl = photoUrl;
    this._description = description;
    this._owner = owner;
    this._hashtags = hashtags;
  }
 
 
  get id(){
    return this._id;
  }
 
 
  get photoUrl() {
    return this._photoUrl;
  }
 
 
  get description() {
    return this._description;
  }
 
 
  get owner() {
    return this._owner;
  }
 
 
  get hashtags() {
    return this._hashtags;
  }
}