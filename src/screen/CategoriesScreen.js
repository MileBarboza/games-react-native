import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { BtnProducts } from '../components/Buttons'

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
      <Text>🎮</Text>
      <BtnProducts txt="PRODUCTS" onPress={() =>navigation.navigate("Products")}/>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})