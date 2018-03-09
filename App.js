import React from "react";
import {
  Text,
  Button,
  Animated,
  Easing,
  Image
} from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Ionicons, EvilIcons } from '@expo/vector-icons';

import HomePage from './components/Home/HomePage';
import Products from "./components/Products/ProductList";
import Product from "./components/Products/Product";
import CartPage from './components/CartPage';
import DrawerContainer from './components/DrawerContainer';

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});

const DrawerStack = DrawerNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: "Laccadive IO Store"
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
  },
  CartPage: {
    screen: CartPage,
    navigationOptions: {
      title: "Cart"
    }
  }
}, {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
  });

const drawerButton = (navigation) => (
  <Text
    style={{ padding: 15, color: 'white' }}
    onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }
    }><Ionicons name="ios-menu" size={30} /></Text>
);

const cartButton = (navigation) => <Text style={{ padding: 15, color: 'white' }} onPress={() => {
 navigation.navigate('CartPage')
}
}><EvilIcons name="cart" size={30} /></Text>;

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#4C3E54' },
      headerTintColor: 'white',
      gesturesEnabled: false,
      headerLeft: drawerButton(navigation),
      headerRight: cartButton(navigation)
    })
  })

const App = StackNavigator({
  Home: {
    screen: DrawerNavigation
  }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'Home',
    transitionConfig: noTransitionConfig
  });

export default App;
