import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  StatusBar
} from "react-native";

import Products from "./components/Products/ProductList";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginBottom: 90 }}>
        <ToolbarAndroid
          height={60}
          marginTop={30}
          logo={require("./logo.png")}
          title="React Native WooCommerce Store"
          navIcon={require('./cart.png')}
          onActionSelected={this.onActionSelected}
          rtl={true}
        />
        <Products />
      </View>
    );
  }
  onActionSelected(position) {
    console.log("hi");
  }
}