import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Entypo } from '@expo/vector-icons';

import * as CartAction from '../../actions/CartAction';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {}
    }
  }

  componentDidMount() {
    this.props.CartAction.getCart();
  }

  _keyExtractor = (item, index) => item.product;

  removeItem(item) {
    console.log(item)
  }

  render() {
    const { cart } = this.props;
    console.log('cart', cart)

    if (cart && cart.length > 0) {
      var cartArray = JSON.parse(cart);
      const Items = <FlatList contentContainerStyle={styles.list}
        data={cartArray}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) =>
          <View style={styles.lineItem} >
            <Image style={styles.image} source={{ uri: item.product.images[0].src }} />
            <Text style={styles.text}>{item.product.name}</Text>
            <Text style={styles.text}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => this.removeItem(item)}><Entypo name="cross" size={30} /></TouchableOpacity>
          </View>
        }
      />;
      return (
        <View style={styles.container}>
          {Items}
        </View>
      )
    } else {
      return (
        <View>
          <Text>Cart is empty!</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  lineItem: {
    flexDirection: 'row'
  },
  list: {
    flexDirection: 'column'
  },
  image: {
    width: 50,
    height: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    padding: 5
  }
})

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    CartAction: bindActionCreators(CartAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);