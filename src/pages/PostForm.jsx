import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {action, observable} from 'mobx';

import LABELS from '../consts/labels';
import NAV from '../consts/nav';

class PostForm extends React.Component {
    @observable userId = '';
    @observable title = '';
    @observable body = '';

    render() {
        const {routingStore: {push}} = this.props;

        return (
            <div>
                <h1>{LABELS.NEW_POST}</h1>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group controlId="newPost.userId">
                        <Form.Label>User</Form.Label>
                        <Form.Control as="select" name="userId" onChange={this.handleInputChange('userId')}>
                            <option>Not selected</option>
                            <option value={1}>User 1</option>
                            <option value={2}>User 2</option>
                            <option value={3}>User 3</option>
                            <option value={4}>User 4</option>
                            <option value={5}>User 5</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="newPost.title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter post title" name="title"
                                      onChange={this.handleInputChange('title')}/>
                    </Form.Group>

                    <Form.Group controlId="newPost.body">
                        <Form.Label>Body</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter post body" name="title"
                                      onChange={this.handleInputChange('body')}/>
                    </Form.Group>

                    <Button type="submit" variant="secondary" onClick={() => push(NAV.POSTS)}>Cancel</Button>&nbsp;
                    <Button type="submit">Add</Button>
                </Form>
            </div>
        )
    }

    @action
    handleInputChange = name => e => {
        this[name] = e.target.value;
    };

    @action
    handleFormSubmit = async (e) => {
        // TODO: Add form validation
        const {postsStore, routingStore: {push}} = this.props;
        e.preventDefault();
        await postsStore.newPost(this.userId, this.title, this.body);
        push(NAV.POSTS);
    };
}

export default PostForm;
