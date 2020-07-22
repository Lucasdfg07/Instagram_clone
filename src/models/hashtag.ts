export class Hashtag {
    constructor(private _id: number, private _name: string) { }
   
    get id() {
      return this._id;
    }
   
    get name() {
      return this._name;
    }
  }