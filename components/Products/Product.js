import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import HTMLView from 'react-native-htmlview';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
    }

    onPress = () => {
        this.setState({
            count: this.state.count -1 + 2
        })
    }

    render() {
        const product = this.props.navigation.state.params.product;
        return (
            <ScrollView>
                <Image style={styles.image} source={{ uri: product.images[0].src }} />
                <Text style={styles.text}>{product.name}     $ {product.price}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(count) => this.setState({ count })}
                        value={`${this.state.count}`}
                        keyboardType="numeric"
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}
                    >
                        <Text> ADD TO CART </Text>
                    </TouchableOpacity>
                </View>
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
        paddingLeft: 20,
        paddingBottom: 20,
        textAlign: 'center'
    },
    input: {
        height: 40,
        width: 50,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginLeft: 20,
        marginBottom: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#05a5d1',
        padding: 10,
        width: 150,
        height: 40,
        marginLeft: 20
    },
    description: {
        fontSize: 14,
        padding: 15,
    },
    html: {
        paddingLeft: 20,
        paddingRight: 20
    }
});

export default Product;