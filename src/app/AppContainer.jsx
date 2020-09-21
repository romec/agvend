import React from 'react';
import {Router} from 'react-router';
import {Provider} from 'mobx-react';
import {syncHistoryWithStore} from 'mobx-react-router';
import {createBrowserHistory} from 'history';

import App from './App';
import stores from '../stores';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.routingStore);

class AppContainer extends React.Component {
    componentDidMount() {
        stores.postsStore.fetchPosts();
    }

    render() {
        return (
            <Provider {...stores}>
                <Router history={history}>
                    <App/>
                </Router>
            </Provider>
        );
    }
}

export default AppContainer;
