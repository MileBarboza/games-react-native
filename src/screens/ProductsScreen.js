import React, { useEffect } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { filterProduct, selectedProduct } from '../store/actions/products.action'
import ProductsItem from '../components/ProductsItem'
import colors from '../constants/colors'

const ProductsScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const categoryProducts = useSelector(state => state.products.filterProduct)
  const category = useSelector(state => state.categories.selected)

  useEffect(() => {
    dispatch(filterProduct(category.id))
  }, [])

  const handleSeletedProduct = (item) => {
    dispatch(selectedProduct(item.id))
      navigation.navigate("Details", {
        img: item.img,
        name: item.name,
      })
  }

  const renderProduct = ({item}) => (
      <ProductsItem item={item} onSelected={handleSeletedProduct} />
  )

  return (
   <View style={styles.container}>
       <FlatList style={styles.containerProd}
         data={categoryProducts}
         renderItem={renderProduct}
         keyExtractor={item => item.id}
         numColumns={2}
       />
   </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.background
  },
  containerProd:{
    marginBottom:55,
  }
})

