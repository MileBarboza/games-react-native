
import React, { useEffect } from 'react'
import { FlatList, View, StyleSheet ,Text} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, getOrders } from '../store/actions/order.action';
import OrderItem from "../components/OrderItem";
import colors from '../constants/colors';

const OrdersScreen = () => {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.list)

    useEffect(() => {
      dispatch(getOrders())
    }, [])

    const handleDeleteItem = id => {
        dispatch(deleteOrder(id))
    }

    const renderOrderItem = ({ item }) => (
      <OrderItem item={item} onDelete={() => handleDeleteItem(item.id)}/>
    )

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Orders:</Text>
        <FlatList
          data ={orders}   
          keyExtractor={item => item.id}
          renderItem={renderOrderItem}
        />
      </View>
  )}

export default OrdersScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
    marginBottom: 108,
    paddingHorizontal:5,
    backgroundColor:colors.background
  },
  title:{
    fontWeight:'bold',
    paddingTop:15,
    marginLeft:15,
    fontSize:24,
    color:colors.primary
  }
})