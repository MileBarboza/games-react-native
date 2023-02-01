import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BtnDetail } from '../components/Buttons'

const ProductsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Text>👾</Text>
      <BtnDetail  txt="DETAILS" onPress={() => navigation.navigate("Details")}/>
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})

