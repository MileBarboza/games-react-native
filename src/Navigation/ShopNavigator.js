import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screen/CategoriesScreen';
import DetailsScreen from '../screen/DetailsScreen';
import ProductsScreen from '../screen/ProductsScreen';
import CartScreen from '../screen/CartScreen';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Categories">
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Products" component={ProductsScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator
