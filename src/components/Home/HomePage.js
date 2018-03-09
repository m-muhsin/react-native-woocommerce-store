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
        <Text style={styles.title}>Welcome to Laccadive IO Store</Text>
        <ScrollView
          horizontal
          scrollEventThrottle={10}
          pagingEnabled
          style={{marginBottom:10}}
        >
          <Image
            source={{uri: 'https://affiliates.laccadive.io/wp-content/uploads/2018/02/sunglasses-324x324.jpg'}} style={styles.sliderImage}
          />
          <Image
            source={{uri: 'https://affiliates.laccadive.io/wp-content/uploads/2018/02/cap-324x324.jpg'}} style={styles.sliderImage}
          />
          <Image
            source={{uri: 'https://affiliates.laccadive.io/wp-content/uploads/2018/02/polo-324x324.jpg'}} style={styles.sliderImage}
          />
        </ScrollView>
        <Button title="Products" onPress={() => navigate("Products")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    padding: 10
  },
  sliderImage: {
    height: 360,
    width: 360
  }
});

export default HomePage;
