import React from 'react'
import { StyleSheet, Text, View, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { selectedProduct } from "../store/actions/products.action"
import { clearFav } from "../store/actions/favorite.action"
import FavItem from "../components/FavItems"
import { BtnEmpty } from "../components/Buttons"
import colors from "../constants/colors"

const FavScreen = ({navigation}) => {
  const favorites= useSelector(state => state.favorites.favorites)
  const dispatch = useDispatch()

  const renderFavItem = ({ item }) => (
    <FavItem item={item} onSelected={handleSeletedProduct} /> 
  )
  const handleClearFav = () => {   
    dispatch(clearFav(favorites))
  }
  const handleSeletedProduct = (item) => {
    dispatch(selectedProduct(item.id))
      navigation.navigate("Details", {
        img: item.img,
        name: item.name,
      })
  }
  
  return (
    <View style={styles.container}>
      {favorites.length > 0  ?
      <>
        <View style={styles.list}>
          <FlatList style={styles.fav}
            data={favorites}
            keyExtractor={item => item.id}
            renderItem={renderFavItem}
            numColumns={2}
          />
        </View>
        <View style={styles.btnContainer}>
          <BtnEmpty txt="EMPTY FAVORITE" onPress={handleClearFav}/>
        </View>
      </>   :
        <Text style={styles.vacio}>No Favorites yet</Text>
      }
    </View>
  )
}
export default FavScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background
  },
  list: {
    paddingHorizontal: 20,
    flex:1,
  },
  title: {
    fontSize: 18,
    fontWeight:'bold',
    marginTop:20,
    textAlign:"center",
  },
  vacio:{
    flex: 1,
    color:"#f5e3e5",
    fontSize:16,
    textAlign:"center",
    marginVertical:"70%"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent:"space-evenly",
    alignItems: "center",
    marginBottom:60,
  },
})

