import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title, view }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={view}>
        <Text style={styles.cart}><Ionicons name="cart-outline" size={38} color="black"  /></Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginTop: 35,
    flexDirection: "row",
    height: 70,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
    position: "relative",
  },
  cart:{
   paddingTop: 15,
  }
});
