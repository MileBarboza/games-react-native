import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import colors from "../constants/colors"

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}> 
       <View  style={styles.imgContainer}>
        <Image source= {{uri: item.img}} style={styles.image}  />
       </View>
       <View style={styles.detail}>
           <Text style={styles.item}>{item.name}</Text>
           <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
           <Text style={styles.price}>${item.price}</Text>
       </View>
       <View style={styles.delete}>
         <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.iconDelete}>
            <Ionicons name="trash-outline" size={24} color={colors.cart}/>
          </TouchableOpacity>
       </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  container: {
    height:125, 
    borderRadius:10,
    marginVertical:10,
    flexDirection:'row',
    alignItems:'center',
    paddingBottom:5,
    borderBottomWidth: 1,
    borderBottomColor: "#3b3b3b",
  },
  imgContainer:{
    flex:1/1.7,
  },
  image:{
    Width:30,
    height:150,
    height:170,
    height:'100%',
    borderRadius:3
  },
  detail: {
    height:100,
    marginLeft:10, 
    flex:1,
    paddingLeft:10
  },
  item: {
    fontWeight:'bold',
    fontSize: 18,
    color:colors.primary
  },
  price:{
    fontSize:20,
    fontSize:17,
    fontWeight:"bold",
    color:colors.primary
  },
  quantity:{
    color:colors.primary,
    paddingVertical:3,
  },
  delete:{
    marginRight:20, 
    alignItems:'center',
    color:colors.cart,
  },
  iconDelete:{
     paddingLeft:5, 
     flexDirection:'row',
  },
})