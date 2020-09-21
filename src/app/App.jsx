import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {inject, observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import AppNav from './AppNav';
import PostForm from '../pages/PostForm';
import PostList from '../pages/PostList';
import Home from '../pages/Home';
import NAV, {NEW_POST} from '../consts/nav';

@inject('postsStore', 'routingStore')
@observer
class App extends React.Component {
    render() {
        const {postsStore, routingStore, routingStore: {location}} = this.props;

        return (
            <div>
                <AppNav routingStore={routingStore}/>

                <Container>
                    <Row>
                        <Col/>
                        <Col xs={10}>
                            {location.pathname === NAV.HOME ? <Home/> : null}
                            {location.pathname === NAV.POSTS ? <PostList postsStore={postsStore}/> : null}
                            {location.pathname === NAV.NEW_POST ? <PostForm routingStore={routingStore} postsStore={postsStore}/> : null}
                        </Col>
                        <Col/>
                    </Row>
                </Container>
                <DevTools/>
            </div>
        );
    }
}

export default App;
