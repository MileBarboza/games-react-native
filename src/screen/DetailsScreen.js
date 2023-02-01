import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BtnCart, Buttons } from '../components/Buttons'

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Text>👾</Text>
      <View style={styles.btnContainer}>
        <Buttons  txt="HOME" onPress={() => navigation.popToTop()}/>
        <BtnCart txt="CART" onPress={() =>navigation.navigate("Cart")}/>
      </View >
    </View>
  )
}

export default DetailsScreen

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