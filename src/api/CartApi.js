import axio from 'axios';
import { AsyncStorage } from 'react-native';

import Constants from '../constants/Constants';

class CartApi {
    static getCart() {
        return AsyncStorage.getItem('cart', (err, result) => {
            jsonCart = JSON.parse(result);
            return jsonCart;
        }).catch(err => {
            console.log('error', err);
        });
    }

    static addToCart(product, quantity) {
        return AsyncStorage.getItem('cart', (err, result) => {

            jsonCart = JSON.parse(result);

            const cartItem = {
                "product": product,
                "quantity": quantity
            }

            jsonCart.push(cartItem);

            AsyncStorage.setItem('cart', JSON.stringify(jsonCart));

            return jsonCart;
        }).catch(err => {
            console.log('error', err);
        });
    }
}

export default CartApi;