import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/RootReducer';
import InitialState from '../reducers/InitialState';

let middleware = [thunk];

export default function configureStore() {
	return createStore(
		RootReducer,
		applyMiddleware(...middleware)
	);
}
