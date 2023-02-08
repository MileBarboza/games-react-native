import { StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { PRODUCTS } from '../data/products'
import ProductsItem from '../components/ProductsItem'

const ProductsScreen = ({navigation, route}) => {

  useEffect(() => {
    console.log(route)
  }, [])

  const newProducts = PRODUCTS.filter (
      product => product.category === route.params.categoryId
  )

  const handleSeletedProduct = (item) => {
      navigation.navigate("Details", {
        img: item.img,
        name: item.name,
        description: item.description,
        price: item.price,
      })
  }

  const renderProduct = ({item}) => (
      <ProductsItem item={item} onSelected={handleSeletedProduct} />
  )

  return (
      <FlatList style={styles.container}
        data={newProducts}
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

