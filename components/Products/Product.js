import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import HTMLView from 'react-native-htmlview';

class Product extends React.Component {
    render() {
        const product = this.props.navigation.state.params.product;
        return (
            <ScrollView>
                <Image style={styles.image} source={{uri: product.images[0].src}} />                
                <Text style={styles.text}>{product.name}</Text>
                <Text style={styles.text}>$ {product.price}</Text>
                <HTMLView style={styles.html} value={product.description} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
      width: 360, 
      height: 360
    },
    text: {
      fontSize: 20,
      padding: 5,
      textAlign: 'center',
    },
    description: {
      fontSize: 14,
      padding: 5,
    },
    html: {
        padding: 10
    }
  });

export default Product;