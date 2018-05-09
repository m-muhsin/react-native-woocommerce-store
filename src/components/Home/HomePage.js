import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  StatusBar,
  Button,
  Image,
  ScrollView
} from "react-native";

class HomePage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={styles.title}>React Native WooCommerce Store</Text>
        <ScrollView
          horizontal
          scrollEventThrottle={10}
          pagingEnabled
          style={{ marginBottom: 10 }}
        >
          <Image
            source={{ uri: 'https://woocommerce-store.on-its-way.com/wp-content/uploads/2018/02/sunglasses-768x768.jpg' }} style={styles.sliderImage}
          />
          <Image
            source={{ uri: 'https://woocommerce-store.on-its-way.com/wp-content/uploads/2018/02/cap-768x768.jpg' }} style={styles.sliderImage}
          />
          <Image
            source={{ uri: 'https://woocommerce-store.on-its-way.com/wp-content/uploads/2018/02/polo-768x767.jpg' }} style={styles.sliderImage}
          />
        </ScrollView>
        <Button color="#05a5d1" title="SHOP" onPress={() => navigate("Products")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    padding: 10
  },
  sliderImage: {
    height: 360,
    width: 360
  }
});

export default HomePage;
