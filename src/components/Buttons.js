import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from "../constants/colors";

export function Buttons({txt, onPress}) {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: colors.home }}  onPress={onPress}>
      <Text style={styles.buttonText}>{txt}</Text>
    </TouchableOpacity>
  )
}
export function BtnBack({txt, onPress}) {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: colors.back }}  onPress={onPress}>
      <Text style={styles.buttonText}>{txt}</Text>
    </TouchableOpacity>
  )
}

export function BtnProducts({txt, onPress}) {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: colors.products }}  onPress={onPress}>
        <Text style={styles.buttonText}>{txt}</Text>
    </TouchableOpacity>
  )
}
  
export function BtnDetail({txt, onPress}) {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: colors.detail }}  onPress={onPress}>
      <Text style={styles.buttonText}>{txt}</Text>
    </TouchableOpacity>
  )
}
export function BtnCart({txt, onPress}) {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: colors.cart }}  onPress={onPress}>
      <Text style={styles.buttonText}>{txt}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        width:"35%",
        padding:12,
        margin:10,
        borderRadius:20,
    },
    buttonText: {
        textAlign:"center",
        color: "#f1f1f1",
        fontWeight:"bold"
    }
})



