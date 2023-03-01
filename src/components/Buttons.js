import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from "../constants/colors";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

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
    <TouchableOpacity onPress={onPress}>
       <MaterialIcons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  )
}

export function BtnIcon({txt, onPress}) {
  return (
    <TouchableOpacity style={{ ...styles.button, ...styles.bntIcon, backgroundColor: colors.cart }}  onPress={onPress}>
       <Ionicons name="list" size={24} color="white" />
       <Text style={styles.buttonText}>{txt}</Text>
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
  btnBack:{
    paddingLeft: 19,
  },
    bntIcon:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    paddingHorizontal:20,
  },
  add:{
    borderTopStartRadius:60,
    borderBottomEndRadius:60,
    borderWidth:1,
    borderRadius:6,
    borderColor:"#888",
    marginRight:25
  }
})



