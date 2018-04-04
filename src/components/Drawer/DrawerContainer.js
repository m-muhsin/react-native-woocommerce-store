import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContainer extends React.Component {

  logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'loginStack' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={styles.transparentButton}>
          Home
        </Text>
        <Text
          onPress={() => navigation.navigate('Products')}
          style={styles.transparentButton}>
          Products
        </Text>
        <Text
          onPress={() => navigation.navigate('CartPage')}
          style={styles.transparentButton}>
          Cart
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  transparentButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4C3E54',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#4C3E54',
    borderWidth: 1,
    textAlign: 'center'
  }
})
