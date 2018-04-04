import *  as types from '../constants/ActionTypes';

export function getCart() {
    return (dispatch) => {
        dispatch({
            type: types.GET_CART_SUCCESS
        });
    }
}

export function addToCart(product, quantity) {
    return (dispatch) => {
        const cartItem = {
            "id": product.id,
            "image": product.images[0].src,
            "name": product.name,
            "quantity": quantity
        }
        dispatch({
            type: types.ADD_TO_CART_SUCCESS,
            item: cartItem
        });
    }   
}

export function removeFromCart(item) {
    return (dispatch) => {
        dispatch({
            type: types.REMOVE_FROM_CART_SUCCESS,
            item: item
        });
    }
}
