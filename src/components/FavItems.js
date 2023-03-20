import React from 'react'
import {  Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons"
import { useDispatch } from 'react-redux';
import { deleteFav } from '../store/actions/favorite.action';
import colors from '../constants/colors';

const FavItems = ({item, onSelected}) => {
  const dispatch = useDispatch()

  const handleFavItem = () => {
      dispatch(deleteFav(item))
  }

  return (
    <TouchableOpacity onPress={() => onSelected(item)} style={styles.container}>
      <Image source= {{uri: item.img}} style={styles.image}/>
      <Text style={styles.titleProd}>{item.name}</Text>
     <View style={styles.contBtn}>
       <Text style={styles.price}>${item.price}</Text>
         <TouchableOpacity onPress={handleFavItem} style={styles.btnFav}> 
            <Ionicons  name="ios-heart"  color={'crimson'} size={28} ></Ionicons> 
         </TouchableOpacity>
     </View>
    </TouchableOpacity>
  )
}

export default FavItems

const styles = StyleSheet.create({
  container: {
    flex:1/2,
    margin: 10,
    paddingVertical: 3,
  },
  titleProd: {
    textAlign: "center",
    fontSize: 20,
    color:colors.primary
  },
  price: {
    fontSize: 20,
    textAlign: "left",
    paddingLeft: 10,
    fontFamily:'SairaBold',
    color:colors.primary
  },
  image: {
    maxWidth:140,
    height: 180,
    borderRadius: 4,
    resizeMode: "cover",
  },
  btnFav:{
    paddingRight:20
  },
  contBtn:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
})