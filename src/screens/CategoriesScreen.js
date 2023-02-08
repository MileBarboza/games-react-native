import { FlatList, StyleSheet, View} from 'react-native'
import React from 'react'
import CategoriesItem from '../components/CategoriesItem'
import {CATEGORIES} from '../data/categories'

const CategoriesScreen = ({navigation}) => {

  const handleSelectedCategory = item => {
    navigation.navigate("Products", {
      categoryId: item.id,
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
        data={CATEGORIES}
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