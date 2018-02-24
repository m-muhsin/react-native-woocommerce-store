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
      <View>
        <ToolbarAndroid
          height={60}
          marginTop={30}
          logo={require("./logo.png")}
          title="React Native WooCommerce Store"
          actions={[
            { title: "Cart", show: "always" }
          ]}
          onActionSelected={this.onActionSelected}
        />
        <Products />
      </View>
    );
  }
  onActionSelected(position) {
    console.log("hi");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
