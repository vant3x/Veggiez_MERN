import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.js';
import { Provider } from 'react-redux';
import  createHistory  from 'history/createBrowserHistory';

import { routerMiddleware } from 'react-router-redux';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = configureStore(middleware);

ReactDOM.render(
	<Provider store={store}><Router history={history} /></Provider>
	, document.getElementById('root'));
registerServiceWorker();
