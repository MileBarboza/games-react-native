import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import colors from "../constants/colors";

const Cart = () => {
  return (
    <View style={styles.contain}>
      <Text style={styles.title}>CART ITEMS ADDED: </Text>
      <View style={{ height: 1, borderColor: "#bebebe", borderWidth: 1 }} />
      <View style={styles.contain}>
          <Text style={styles.txt}>Your cart is empty.</Text>
      </View>
      <Text style={styles.total}>Total: $0</Text>
      <View style={{ height: 1, borderColor: "#bebebe", borderWidth: 1 }} />
      <View style={styles.btnContainer}>
        <Pressable>
          <Text style={styles.btn}>Empty cart</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.btn}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontFamily: "Saira",
    fontSize: 25,
    textAlign: "center",
    padding: 10,
  },
  price: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
  },
  imagen: {
    width: 170,
    height: 200,
    resizeMode: "cover",
  },
  listCart: {
    height: 1,
    borderColor: "gray",
    borderWidth: 1,
    height: 200,
  },
  txt: {
    textAlign: "center",
    fontSize: 17,
  },
  total: {
    fontSize: 21,
    marginLeft: 20,
    paddingVertical: 12,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: colors.Tertiary,
    color: "#fff",
    textShadowColor: "#00000076",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    width: 150,
    borderRadius: 20,
    margin: 20,
  },
});
