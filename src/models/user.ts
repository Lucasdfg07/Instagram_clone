export class User {
    constructor(private _id: number, private _name: string, private _email: string, private _photoUrl: string) {}
   
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
  }