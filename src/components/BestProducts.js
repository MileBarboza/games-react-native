import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import colors from '../constants/colors'

const BestProducts = ({item, onSelected}) => {

  return (
    <TouchableOpacity onPress={() => onSelected(item)} style={styles.container}>
        <Image source= {{uri: item.img}} style={styles.image}/>
          <Text style={{...styles.txtColor, ...styles.titleProd}} >{item.name}</Text>
    </TouchableOpacity>
  )
}

export default BestProducts

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  titleProd: {
    textAlign: "center",
    fontSize: 16,
    maxWidth:138,
  },
  txtColor:{
    color:colors.primary
  },
  image: {
    borderRadius: 4,
    width:140,
    height:'80%',
  },
})