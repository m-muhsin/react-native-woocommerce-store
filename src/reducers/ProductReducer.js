import * as types from '../constants/ActionTypes';
import InitialState from './InitialState';

export default function (state = InitialState.products, action) {
	switch (action.type) {
		case types.GET_PRODUCTS_SUCCESS:
			return action.products;
		default:
			return state;
	}
}
