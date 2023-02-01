import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BtnBack, Buttons } from '../components/Buttons'

const CartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      <Text>🕹️</Text>
      <View style={styles.btnContainer}>
          <BtnBack txt="BACK" onPress={() => navigation.goBack() } />
          <Buttons txt="HOME" onPress={() => navigation.popToTop() } />
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  btnContainer:{
    flexDirection:'row',
  },

})