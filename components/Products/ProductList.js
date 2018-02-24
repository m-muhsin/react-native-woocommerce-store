import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View, ScrollView, Image } from "react-native";

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
    return (
        <ScrollView>
          <FlatList
            data={this.state.products || []}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => 
              <View style={styles.view}>
                <Image  style={styles.image} source={{uri: item.images[0].src}} />
                <Text style={styles.text}>{item.name}</Text>
              </View>
            }
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
    flexDirection:'row', 
    flexWrap:'wrap'
  },
  image: {
    width: 40, 
    height: 40
  },
  text: {
    fontSize: 20,
    padding: 5
  }
});

export default Products;
