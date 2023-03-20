import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CategoriesItem = ({item, onSelected}) => {
  return (
    <View style={styles.categoriesItem } >
     <TouchableOpacity onPress={() => onSelected(item)} style={styles.container}>
          <Image source= {{uri: item.img}} style={styles.img}/>
     </TouchableOpacity>
     <Text style={styles.txt}>{item.title}</Text>
    </View>
  )
}

export default CategoriesItem

const styles = StyleSheet.create({
  categoriesItem: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    flex: 1,
    position:"relative"
  },
  txt:{
    position:"absolute",
    color:"#fcfcfc",
    fontWeight:"bold",
    fontSize:25,
    bottom:15,
    paddingLeft:15,
  },
  imgContainer: {
    width: "40%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius:20
  },
})