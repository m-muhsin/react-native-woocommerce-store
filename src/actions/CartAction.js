import *  as types from '../constants/ActionTypes';
import CartApi from '../api/CartApi';

export function getCart() {
    return (dispatch) => {
        return CartApi.getCart().then(cart => {
            dispatch(getCartSuccess(cart));
        }).catch(err => {
            //TODO:get correct error msg
            console.log(err.error);
        })
    };
}

function getCartSuccess(cart) {
    return {
        type: types.GET_CART_SUCCESS,
        cart
    };
}

export function addToCart(product, quantity) {
    return (dispatch) => {
        return CartApi.addToCart(product, quantity).then(cartUpdate => {
            dispatch(addToCartSuccess(cartUpdate));
        }).catch(err => {
            //TODO:get correct error msg
            console.log('error',err);
        })
    };
}

function addToCartSuccess(cartUpdate) {
    return {
        type: types.ADD_TO_CART_SUCCESS,
        cartUpdate
    };
}