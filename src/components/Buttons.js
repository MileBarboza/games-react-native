import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import colors from "../constants/colors";

export function BtnAdd({txt, onPress}) {
  return (
    <TouchableOpacity style={{ ...styles.button,  ...styles.add, backgroundColor: colors.cart }}  onPress={onPress}>
      <Text style={styles.buttonText}>{txt}</Text>
    </TouchableOpacity>
  )
}

export function BtnCheckout({txt, onPress}) {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: colors.checkout }}  onPress={onPress}>
      <Text style={styles.buttonText}>{txt}</Text>
    </TouchableOpacity>
  )
}

export function BtnEmpty({txt, onPress}) {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: colors.empty }}  onPress={onPress}>
        <Text style={styles.buttonText}>{txt}</Text>
    </TouchableOpacity>
  )
}

export function BtnBack({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.back}>
       <Ionicons name="md-chevron-back-outline" size={28}  color={colors.primary}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width:"25%",
    width:150,
    padding: 9,
    margin: 10,
    borderRadius:20,
  },
  buttonText: {
    textAlign:"center",
    color: "#f1f1f1",
    fontWeight:"bold"
  },
  add:{
    borderTopStartRadius:60,
    borderBottomEndRadius:60,
    borderWidth:1,
    borderRadius:6,
    borderColor:"#888",
    marginRight:25,
    width:180
  },
  back:{
    borderRadius:50,
    padding:3,
    backgroundColor:'#4040406d'
  }
})



