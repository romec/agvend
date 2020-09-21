import React from 'react';
import {Table} from 'react-bootstrap';
import {observer} from 'mobx-react';

import PostRow from './PostRow';

@observer
class PostListTable extends React.Component {
    render() {
        const {posts} = this.props;

        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>id</th>
                    <th>userId</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                </thead>
                <tbody>
                {posts.map(post => (
                    <PostRow key={post.id} {...post} />
                ))}
                </tbody>
            </Table>
        );
    }
}

export default PostListTable;
