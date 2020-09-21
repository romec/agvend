import React from 'react';
import { observer } from 'mobx-react';

import ACTIONS from '../consts/actions';
import LABELS from '../consts/labels';
import PostListTable from '../components/PostListTable';

@observer
class PostList extends React.Component {
  render() {
    const {postsStore: {state, reversed}} = this.props;

    return (
      <div>
        <h1>{LABELS.POSTS}</h1>
        {state === ACTIONS.PENDING ? <div>Loading...</div> : null}
        {state === ACTIONS.ERROR ? <div>Error, we work on it, please try again later...</div> : null}
        {state === ACTIONS.DONE ? <PostListTable posts={reversed} /> : null}
      </div>
    );
  }
}

export default PostList;
