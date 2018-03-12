import *  as types from '../constants/ActionTypes';
import ProductApi from '../api/ProductApi';

export function getProducts() {
    return (dispatch) => {
        return ProductApi.getProducts().then(products => {
            dispatch(getProductsSuccess(products));
        }).catch(err => {
            //TODO:get correct error msg
            console.log(err.error);
        })
    };
}

function getProductsSuccess(products) {
    return {
        type: types.GET_PRODUCTS_SUCCESS,
        products
    };
}