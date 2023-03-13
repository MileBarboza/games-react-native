import React from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import CartItem from "../components/CartItem"
import { BtnCheckout, BtnEmpty } from "../components/Buttons"
import { useSelector, useDispatch } from "react-redux"
import { confirmCart, removeItem, clearCart } from "../store/actions/cart.action"

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)

  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total))
    dispatch(clearCart(items))
    navigation.navigate("UserTab")  
  }
  const handleDeleteItem = id => {
    dispatch(removeItem(id))
  }
  const handleClearCart = () => {   
    dispatch(clearCart(items))
  }

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  )

  return (
    <View style={styles.container}>

      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderCartItem}
        />
      </View>

      <Text style={styles.total}>Total: <Text style={styles.price}>$ {total}</Text></Text>
        <View style={styles.btnContainer}>
          <BtnEmpty  txt="EMPTY CART" onPress={handleClearCart}/>
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
  total: {
    textAlign:"right",
    fontSize: 21,
    marginHorizontal: 30,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  price:{
    fontWeight:"bold"
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
