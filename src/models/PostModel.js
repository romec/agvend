import { observable } from 'mobx';

class PostModel {
  @observable id;
  @observable userId;
  @observable title;
  @observable body;

  constructor(id, userId, title, body) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }
}

export default PostModel;
