import React from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { confirmCart, removeItem, clearCart } from "../store/actions/cart.action"
import CartItem from "../components/CartItem"
import { BtnCheckout, BtnEmpty } from "../components/Buttons"
import colors from "../constants/colors"

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
     {items.length > 0  ?
      <>
        <View style={styles.list}>
          <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={renderCartItem}
          />
        </View>
        <View style={styles.containerTotal}>
           <Text style={styles.total}>Total: </Text>
           <Text style={styles.price}>$ {total}</Text>
        </View>
       <View style={styles.btnContainer}>
         <BtnEmpty  txt="EMPTY CART" onPress={handleClearCart}/>
         <BtnCheckout txt="CHECKOUT"  onPress={handleConfirmCart}/>
       </View>
      </>   :
        <Text style={styles.vacio}>Your Cart is empty</Text>
      }
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  containerTotal:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    color:colors.white
  },
  total: {    
    textAlign:"right",
    fontSize: 21,
    marginHorizontal: 30,
    paddingBottom: 5,
    color:colors.primary,
  },
  price:{
    fontWeight:"bold",
  color:colors.primary,
    fontSize: 21,
    marginHorizontal: 30,
    paddingBottom: 5,
  },
  vacio:{
    flex: 1,
    color:"#f5e3e5",
    fontSize:16,
    textAlign:"center",
    marginTop:"70%"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent:"space-evenly",
    alignItems: "center",
    marginBottom:60,
  },
})
