import axio from 'axios';

import Constants from '../constants/Constants';

class CartApi {
    static getCart() {
        const url = `${Constants.URL.wc}cart?thumb=true`

        return axio.get(url).then(response => {
            return response.data;
        }).catch(err => {
            console.log('error', err)
        });
    }

    static addToCart(product, quantity) {
        const url = `${Constants.URL.wc}cart/add`
        
        return axio.post(url,
            {
                product_id: product.id,
                quantity: quantity
            }
        ).then(response => {
            return response.data;
        }).catch(err => {
            console.log('error', err)
        });
    }
}

export default CartApi;