import * as types from '../constants/ActionTypes';
import InitialState from './InitialState';

export default function (state = InitialState.cart, action) {
	switch (action.type) {
		case types.GET_CART_SUCCESS:
            return action.cart;
        case types.ADD_TO_CART_SUCCESS:
            return action.cartUpdate;
		default:
			return state;
	}
}
