import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import colors from "../constants/colors";

const formatDay = (time) => {
  const date = new Date(time)
  return date.toLocaleDateString()
}

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.order}>
       <View style={styles.containerOrder}>
          <Text style={{...styles.txtColor, ...styles.date}}>{formatDay(item.date)}</Text>
          <Text style={{...styles.txtColor, ...styles.id}}>Número de Order: </Text>
          <Text style={{...styles.txtColor, ...styles.id}}>{item.id} </Text>
          <Text style={{...styles.txtColor, ...styles.total}}>Total:  $ {item.total} </Text>
       </View>
       
       <View style={styles.trash}>
         <TouchableOpacity onPress={() => onDelete(item.id)}>
             <Ionicons name="md-trash" size={22} color={colors.cart } />
         </TouchableOpacity>
       </View>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  order:{
    flexDirection:"row",
    justifyContent:"space-between",
    justifyContent:"space-around",
    alignItems:"center",
    margin:10,
    borderColor:"#ccc",
    borderColor:colors.checkout,
    borderWidth:1,
    borderRadius:6,
  },
  containerOrder:{
    padding:15,
  },
  txtColor:{
    color:colors.primary
  },
  date:{
    fontSize:18
  },
  id:{
    paddingTop:5,
    fontSize:17
  },
  total:{
    padding:9,
    fontSize:20,
    color:colors.cart,
    fontFamily:'SairaBold'
  },
  trash:{
    padding:20,
  }
})