import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Entypo } from '@expo/vector-icons';

import * as CartAction from '../../actions/CartAction';

class CartPage extends React.Component {

  componentDidMount() {
    this.props.CartAction.getCart();
  }

  _keyExtractor = (item, index) => item.id;

  removeItem(item) {
    this.props.CartAction.removeFromCart(item);
  }

  render() {
    const { cart } = this.props;
    console.log('render cart', cart)

    if (cart && cart.length > 0) {
      const Items = <FlatList contentContainerStyle={styles.list}
        data={cart}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) =>
          <View style={styles.lineItem} >
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.text}>{item.name}</Text>
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
        <View style={styles.container}>
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