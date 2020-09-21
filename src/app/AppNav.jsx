import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

import NAV from '../consts/nav';
import LABELS from '../consts/labels';

class AppNav extends React.Component {
    render() {
        const {routingStore: {push}} = this.props;

        return (
            <Navbar>
                <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => push(NAV.HOME)}>AgVend Test App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => push(NAV.POSTS)}>{LABELS.POSTS}</Nav.Link>
                    <Nav.Link onClick={() => push(NAV.NEW_POST)}>{LABELS.NEW_POST}</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default AppNav;
