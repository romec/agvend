import {action, computed, observable, runInAction} from 'mobx';

import fetchPosts from '../api/fetchPosts';
import newPost from '../api/newPost';
import ACTIONS from '../consts/actions';
import PostListModel from '../models/PostListModel';
import PostModel from '../models/PostModel';

class PostsStore {
    @observable posts = new PostListModel();
    @observable error = null;
    @observable state = null;

    @computed get reversed() {
        return [...this.posts].reverse();
    }

    @action
    async fetchPosts() {
        this.posts.clear();
        this.error = null;
        this.state = ACTIONS.PENDING;

        try {
            const data = await fetchPosts();
            const posts = data.map(({id, userId, title, body}) => new PostModel(id, userId, title, body));

            runInAction(() => {
                this.posts.push(...posts);
                this.state = ACTIONS.DONE;
            });
        } catch (error) {
            runInAction(() => {
                this.error = error;
                this.state = ACTIONS.ERROR;
            });
        }
    }

    @action
    async newPost(userId, title, body) {
        this.error = null;
        this.state = ACTIONS.PENDING;

        try {
            const data = await newPost(userId, title, body);
            const post = new PostModel(data.id, data.userId, data.title, data.body);

            runInAction(() => {
                this.posts.push(post);
                this.state = ACTIONS.DONE;
            });
        } catch (error) {
            runInAction(() => {
                this.error = error;
                this.state = ACTIONS.ERROR;
            });
        }
    }
}

export default PostsStore;
