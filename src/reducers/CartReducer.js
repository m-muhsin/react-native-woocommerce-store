import * as types from '../constants/ActionTypes';
import InitialState from './InitialState';

export default function (state = InitialState.cart, action) {
	switch (action.type) {
		case types.GET_CART_SUCCESS:
			return state;
		case types.ADD_TO_CART_SUCCESS:
			console.log('ADD_TO_CART_SUCCESS state',state)
			return [
				...state,
				action.item
			];
		case types.REMOVE_FROM_CART_SUCCESS:
			const remaingList = [
				...state.filter(i => i.product.id !== action.item.product.id)
			]
			return remaingList;
		default:
			return state;
	}
}
