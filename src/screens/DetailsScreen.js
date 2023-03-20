import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/actions/cart.action'
import { addFav, deleteFav } from '../store/actions/favorite.action'
import { BtnAdd } from '../components/Buttons'
import colors from '../constants/colors'

const DetailsScreen = ({route}) => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.products.selected)
  const [favorite, SetFavorite] = useState(false);

 useEffect(() => {
 }, [])
    
 const handleAddItem = () => {
   dispatch(addItem(product))
 }

 const handleFavItem = () => {
   if (favorite) {
     dispatch(deleteFav(product))
   } else {
     dispatch(addFav(product))
   }
   SetFavorite(!favorite)
 }

 return (
  <View style={styles.container}>     
      <Image source= {{uri: product.img}} style={styles.image} />
    <View style={styles.containerDetail}>
        <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit={true}>{product.name}</Text>
        <Text style={styles.descrip}>{product.description}</Text>
       <Text style={styles.price}>${product.price}</Text>
       <View style={styles.btn}>
        <BtnAdd txt="ADD TO CART" onPress={handleAddItem}/>
        <TouchableOpacity onPress={handleFavItem}>
           <Ionicons name={favorite ?  "ios-heart" : "heart-outline"} size={34} color="crimson" /> 
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
    paddingTop: 15,
    paddingBottom:'2%',
    paddingLeft:14,
    fontFamily:'Saira',
  },
  descrip:{
    color:colors.primary,
    fontSize:16,
    textAlign:"center",
    marginHorizontal:20,
  },
  price:{
    color:colors.primary,
    textAlign:"center",
    fontSize:30,
    fontFamily:'SairaBold',
    position:'absolute',
    bottom:'32%',
    left:'36%',
  },
  btn: {
    position:"absolute",
    bottom:60,
    marginHorizontal:90,
    alignItems:"center",
    flexDirection:'row',
    justifyContent:'center'
  },
})

