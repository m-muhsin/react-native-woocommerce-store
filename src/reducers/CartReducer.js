import * as types from '../constants/ActionTypes';
import InitialState from './InitialState';

export default function (state = InitialState.cart, action) {
	switch (action.type) {
		case types.GET_CART_SUCCESS:
			return state;
		case types.ADD_TO_CART_SUCCESS:
			console.log('ADD_TO_CART_SUCCESS state', state)
			var exists = false;
			const newState = state.map(item => {
				if (item.id === action.item.id) {
					exists = true;
					return {
						...item,
						quantity: item.quantity + action.item.quantity
					}
				} else {
					return item
				}
			});

			if (exists) {
				return newState;
			} else {
				return [
					...state,
					action.item
				];
			}
		case types.REMOVE_FROM_CART_SUCCESS:
			const remaingList = [
				...state.filter(i => i.id !== action.item.id)
			]
			return remaingList;
		default:
			return state;
	}
}
