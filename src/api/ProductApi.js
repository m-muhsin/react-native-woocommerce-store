import axio from 'axios';

import Constants from '../constants/Constants';

class ProductApi {
    static getProducts() {
        const url = `${Constants.URL.wc}products?per_page=100&consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`

        return axio.get(url).then(response => {
            return response.data;
        }).catch(this.handleError);
    }
}

export default ProductApi;