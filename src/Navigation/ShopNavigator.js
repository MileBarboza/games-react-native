import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import colors from '../constants/colors';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
     <Stack.Navigator initialRouteName="Categories" 
     screenOptions={{
       headerStyle: {backgroundColor: colors.cart},
       headerTitleAlign:"center",
       headerTitleStyle:{
         fontWeight: "bold",
         fontSize: 24 }
     }}>
        <Stack.Screen name="Categories" component={CategoriesScreen} 
        options={{title:"Games"}}/>

        <Stack.Screen name="Products" component={ProductsScreen} 
        options={({route}) => ({ title: route.params.title})}
        />
       
        <Stack.Screen name="Details" component={DetailsScreen} 
        options={({route}) => ({ title: route.params.name})}
        />
     </Stack.Navigator>
  )
}

export default ShopNavigator
