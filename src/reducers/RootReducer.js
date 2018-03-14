import { combineReducers } from 'redux';
import products from './ProductReducer';
import cart from './CartReducer';

const RootReducer = combineReducers({
	products,
	cart
});

export default RootReducer;
