import PostsStore from './PostsStore';
import routingStore from './routingStore';

const stores = {
    postsStore: new PostsStore(),
    routingStore,
};

export default stores;
