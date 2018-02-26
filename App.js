import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  StatusBar,
  Button
} from "react-native";
import { StackNavigator } from "react-navigation";

import HomePage from './components/Home/HomePage';
import Products from "./components/Products/ProductList";
import Product from "./components/Products/Product";

const App = StackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: "Home"
    }
  },
  Products: {
    screen: Products,
    navigationOptions: {
      title: "Products"
    }
  },
  Product: {
    screen: Product,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.product.name
    }),
  }
});

export default App;
