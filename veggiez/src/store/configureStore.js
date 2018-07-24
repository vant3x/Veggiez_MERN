import { createStore, combineReducers,compose, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import reducers from '../reducers';
import thunk from 'redux-thunk';

import { routerReducer } from 'react-router-redux';

const enhancer = compose(
  persistState('user')
)

const rootReducer = combineReducers({
	...reducers,
	router: routerReducer
})


export default function configureStore(middleware) {
	return createStore(
		rootReducer,
		applyMiddleware(middleware,thunk),
		enhancer
	);
}