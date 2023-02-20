import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from "../constants/colors";

export function BtnAdd({txt, onPress}) {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: colors.cart }}  onPress={onPress}>
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
})



