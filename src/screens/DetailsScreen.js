import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { BtnAdd } from '../components/Buttons'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/actions/cart.action'
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors'

const DetailsScreen = ({route}) => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.products.selected)

    useEffect(() => {
      console.log(route.params)
    }, [])
    
    const handleAddItem = () => {
      dispatch(addItem(product))
    }

  return (
     <View style={styles.container}>     
         <Image source= {{uri: product.img}} style={styles.image} />
       <View style={styles.containerDetail}>
           <Text style={styles.title}>{product.name}</Text>
              <Text style={styles.descrip}>{product.description}</Text>
           <Text style={styles.price}>${product.price}</Text>
           <View style={styles.btn}>
            <BtnAdd txt="Add to cart" onPress={handleAddItem}/>
            <TouchableOpacity onPress={() => console.log("agregado a Favorito")}>
              <Text><Ionicons name="heart-outline" size={34} color="crimson" /> </Text>
            </TouchableOpacity>
           </View>
       </View>
     </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    position:"relative"
  },
  containerDetail:{
    flex:1,
    width:"100%",
    height:"42%",
    position:"absolute",
    bottom:0,
    borderTopStartRadius:15,
    borderTopEndRadius:15,
    backgroundColor:"#2d2d2d",
  },
  image: {
    Width:"80%",
    height: "60%",
  },
  title:{
    color:colors.primary,
    fontSize:30,
    fontWeight:"bold",
    paddingTop: 20,
    paddingBottom:8,
    paddingLeft:14,
    paddingHorizontal:10
  },
  descrip:{
    color:colors.primary,
    fontSize:16,
    textAlign:"center",
    marginHorizontal:20,
    paddingBottom:8,
  },
  price:{
    color:colors.primary,
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
  },
  btn: {
    position:"absolute",
    bottom:10,
    bottom:60,
    marginHorizontal:90,
    alignItems:"center",
    flexDirection:'row',
    justifyContent:'center'
  }
})

