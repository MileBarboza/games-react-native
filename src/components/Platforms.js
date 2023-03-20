import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'

const Platforms = ({ item }) => {
  return (
    <TouchableOpacity  onPress={console.log(" ")} style={styles.platforms}>
        <Image source= {{uri: item.jpng}} style={styles.img} resizeMode='cover'/>
    </TouchableOpacity>
  )
}

export default Platforms

const styles = StyleSheet.create({
  platforms:{
    borderRadius:10,
    marginHorizontal:15,
    backgroundColor:'#fff',
  },
  img: {
    height:65,
    width:65,
    borderRadius:10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    backgroundColor:'#fff',
  },
})
