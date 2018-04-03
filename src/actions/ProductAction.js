import axios from 'axios';

import Constants from '../constants/Constants';
import *  as types from '../constants/ActionTypes';

export function getProducts() {
    return (dispatch) => {
        const url = `${Constants.URL.wc}products?per_page=100&consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`
        
        return axios.get(url).then(response => {
            dispatch({
                type: types.GET_PRODUCTS_SUCCESS,
                products: response.data
            }
        )}).catch(err => {
            console.log(err.error);
        })
    };
}