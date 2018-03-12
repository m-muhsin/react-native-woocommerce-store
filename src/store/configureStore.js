/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/RootReducer';
import InitialState from '../reducers/InitialState';

let middleware = [thunk];

// if (__DEV__) {
// 	const reduxImmutableStateInvariant = require('redux-immutable-state-invariant')();
// 	const createLogger = require('redux-logger');
//
// 	const logger = createLogger({ collapsed: true });
// 	middleware = [...middleware, reduxImmutableStateInvariant, logger];
// } else {
// 	middleware = [...middleware];
// }

export default function configureStore(initialState) {
	return createStore(
		RootReducer,
		InitialState,
		applyMiddleware(...middleware)
	);
}
