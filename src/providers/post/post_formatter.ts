import { Post } from "../../models/post";
import { User } from "../../models/user";
import { Hashtag } from "../../models/hashtag";
 
export class PostFormatter {
 
  constructor(private post_data: any, private included: any) {}
 
  public call(): Post {
    return this.preparePostObject();
  }
 
  private preparePostObject(): Post {
    let post = this.post_data.attributes;
    post["owner"] = this.includeUser(this.post_data.relationships.user.data, this.included);
    post["hashtags"] = this.includeHashtags(this.post_data.relationships.hashtags.data, this.included);
    return new Post(this.post_data.id, post.photo_url, post.description, post.owner, post.hashtags, 
                    { likeCount: post.like_count, isLiked: post.is_liked });
  }
 
 
  private includeUser(user_data: any, included_data: any): User {
    let user = included_data.filter(included => {
      return included.type == "user" && included.id == user_data.id
    })[0];
    return new User(user.id, user.attributes.name, user.attributes.email, user.attributes.photo_url);
  }
 
 
  private includeHashtags(post_hashtags: any, included_data: any): Hashtag {
    let hashtags_ids = post_hashtags.map(hashtags => { return hashtags.id });
    return included_data.filter(included => {
      return included.type == "hashtag" && this.isThereHashtagId(hashtags_ids, included.id)
    }).map(hashtag => {
      return new Hashtag(hashtag.id, hashtag.attributes.name);
    });
  }
 
 
  private isThereHashtagId(hashtags, id): boolean {
    return hashtags.some(hashtag_id => {
      return hashtag_id == id
    });
  }
}