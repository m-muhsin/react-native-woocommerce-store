import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View, ScrollView } from "react-native";

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
      `${Constants.URL.api}product?per_page=100&consumer_key=${Constants.Keys.ConsumerKey}&consumer_secret=${Constants.Keys.ConsumerSecret}`
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
          renderItem={({ item }) => <Text style={styles.item}>{item.title.rendered}</Text>}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default Products;
