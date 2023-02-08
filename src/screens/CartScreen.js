import React from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import { CART } from "../data/cart"
import CartItem from "../components/CartItem"
import { BtnCheckout, BtnEmpty } from "../components/Buttons"

const CartScreen = () => {
  const total =3949

  const handleConfirmCart = () => {
    console.log("Confirmar Carrito")
  }

  const handleDeleteItem = () => {
    console.log("borrar elemento")
  }

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  )

  return (
    <View style={styles.container}>

      <View style={styles.list}>
        <FlatList
          data={CART}
          keyExtractor={item => item.id}
          renderItem={renderCartItem}
        />
      </View>

      <Text style={styles.total}>Total: ${total}</Text>
        <View style={styles.btnContainer}>
          <BtnEmpty  txt="EMPTY CART" onPress={() => console.log("Empty") }/>
          <BtnCheckout txt="CHECKOUT"  onPress={handleConfirmCart}/>
        </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  footer: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    textAlign:"right",
    fontSize: 21,
    marginHorizontal: 30,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent:"space-evenly",
    alignItems: "center",
    marginBottom:60,
  },
})
