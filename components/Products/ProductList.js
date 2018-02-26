import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from "react-native";
import { StackNavigator } from "react-navigation";

import Constants from '../../Constants';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const that = this;
    fetch(
      `${Constants.URL.wc}products?per_page=100&consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`
    )
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(function(res) {
        that.setState({ products: res });
      })
      .catch(function(error) {
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        );
      });
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    const { navigate } = this.props.navigation;
    const Items = <FlatList contentContainerStyle={styles.list} numColumns={2}
      data={this.state.products || []}
      keyExtractor={this._keyExtractor}
      renderItem={({ item }) => 
      <TouchableHighlight style={{width:'50%'}} onPress={() => navigate("Product", { product: item })} underlayColor="white">
        <View style={styles.view} >
          <Image style={styles.image} source={{uri: item.images[0].src}} />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableHighlight>
      }
    />;
    return (
      <ScrollView>
        {this.state.products.length ? Items : 
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image style={styles.loader} source={require('../../images/cart-loading.gif') }/>
          </View>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column'
  },
  view: {
    padding: 10
  },
  loader: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150, 
    height: 150
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    padding: 5
  }
});

export default Products;
