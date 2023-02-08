import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FavScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Favorite!</Text>
      <Text>❤️</Text>
    </View>
  )
}

export default FavScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})