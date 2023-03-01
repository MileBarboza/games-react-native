import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
         <Image source= {{uri: item.img}} style={styles.image}/>
      </View>
      <View style={styles.detail}>
         <View >
            <Text style={styles.header}>{item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text style={styles.price}>${item.price}</Text>
         </View>
         <TouchableOpacity onPress={() => onDelete(item.id)}>
           <Ionicons name="trash-outline" size={24} color="black" />
         </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection:"row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  header: {
    fontSize: 18,
    paddingRight:10,
  },
  detail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer:{
   flex:1/2.5,
   marginRight:30,
  },
  image:{
    Width:40,
    height: 100,
    borderRadius:3
  },
  price:{
    fontSize:20,
    fontWeight:"bold"
  }
})