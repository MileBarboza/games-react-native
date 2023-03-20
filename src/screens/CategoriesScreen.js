import React from 'react'
import { FlatList, StyleSheet, View, Text} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { selectedCategory } from '../store/actions/category.action'
import { selectedProduct } from '../store/actions/products.action'
import { PLATFORMS } from '../data/products'
import CategoriesItem from '../components/CategoriesItem'
import BestProducts from '../components/BestProducts'
import Platforms from '../components/Platforms'
import colors from '../constants/colors'

const CategoriesScreen = ({navigation}) => {
  const categories = useSelector(state => state.categories.categories)
  const products = useSelector(store => store.products.products)
  const dispatch = useDispatch()

  const handleSelectedCategory = item => {
    dispatch(selectedCategory(item.id))
    navigation.navigate("Products", {
      title: item.title,
    })
  }

  const handleSeletedProduct = (item) => {
    dispatch(selectedProduct(item.id))
      navigation.navigate("Details", {
        img: item.img,
        name: item.name,
      })
  }

  const renderCategories = ({item}) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategory}/>
    </View>
  )
  const renderBestSelling = ({item}) => (
    <View style={styles.sellingContainer}>
      <BestProducts item={item} onSelected={handleSeletedProduct} />
    </View>
  )
  const renderPlatform = ({ item }) => (
    <View>
      <Platforms item={item} onSelected={console.log(" ")} />
    </View>
  )
  return (
     <View style={styles.container}>
        <FlatList 
          style={styles.cat}
          data={categories}
          renderItem={renderCategories}
          keyExtractor={ item => item.id }
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.platformsContainer}>
          <FlatList 
           style={styles.platforms}
            data={PLATFORMS}
            renderItem={renderPlatform}
            keyExtractor={ item => item.id }
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View  style={styles.containerProd}>
          <Text style={styles.title}>Best Selling</Text>
            <FlatList 
              data={products}
              renderItem={renderBestSelling}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
        </View> 
     </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.background,
  },
  categoriesContainer: {
    padding: 10,
    width:250, 
    height: '75%',
    marginTop:5
  },
  cat:{
    height: 0,
  },
  title: {
    textAlign: 'left',
    fontFamily: 'Saira',
    fontSize: 25,
    margin: 8,
    marginBottom:0,
    color:colors.primary,
  },
  containerProd:{
    flex:1,
    bottom:'7%',
  },
  sellingContainer:{
    marginHorizontal:10,
    marginTop:10,
    marginBottom:25,
  },
  platformsContainer:{
    height:70,
    bottom:'8%',
    justifyContent:'center',
    alignItems:'center',
  },
})
