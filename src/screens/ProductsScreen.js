import { StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import ProductsItem from '../components/ProductsItem'
import { useDispatch, useSelector } from 'react-redux'
import { filterProduct, selectedProduct } from '../store/actions/products.action'

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
      <FlatList style={styles.container}
        data={categoryProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
      />
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container:{
    marginBottom:50,
  }
})

