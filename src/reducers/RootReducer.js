import { combineReducers } from 'redux';
import products from './ProductReducer';

const RootReducer = combineReducers({
	products
});

export default RootReducer;
