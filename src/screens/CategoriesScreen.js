import { FlatList, StyleSheet, View} from 'react-native'
import React from 'react'
import CategoriesItem from '../components/CategoriesItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectedCategory } from '../store/actions/category.action'

const CategoriesScreen = ({navigation}) => {
  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch()

  const handleSelectedCategory = item => {
    dispatch(selectedCategory(item.id))
    navigation.navigate("Products", {
      title: item.title,
    })
  }

  const renderCategories = ({item}) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategory}/>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategories}
        keyExtractor={ item => item.id }
      />
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      marginBottom:55,
    },
    categoriesContainer: {
      padding: 10,
      height: 160,
    },
})