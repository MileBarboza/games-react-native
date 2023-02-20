import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import colors from '../constants/colors';
import { TouchableOpacity,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const ShopNavigator = ({navigation}) => {
  return (
     <Stack.Navigator initialRouteName="Categories" 
     screenOptions={{
       headerStyle: {backgroundColor: colors.cart},
       headerTitleAlign:"center",
       headerTitleStyle:{
         fontWeight: "bold",
         fontFamily:"Saira",
         fontSize: 24 },
     }}>
        <Stack.Screen name="Categories" component={CategoriesScreen} 
        options={{title:"Games",
        headerRight: () => (
        <TouchableOpacity onPress={() => console.log("Buscando...")}>
            <Text><Ionicons name="ios-search" size={27} color="black" /> </Text>
        </TouchableOpacity>
        )
        }}/>

        <Stack.Screen name="Products" component={ProductsScreen} 
        options={
          ({route}) => ({ 
            title: route.params.title,
          headerRight: () => (
          <TouchableOpacity onPress={() => console.log("Buscando...")}>
              <Text><Ionicons name="ios-search" size={27} color="black" /> </Text>
          </TouchableOpacity>)
          })
        }/>
       
        <Stack.Screen name="Details" component={DetailsScreen} 
        options={({ 
          headerStyle: {backgroundColor: "transparent"},
          title:"",
          headerTransparent:true,
          headerTintColor:"crimson",
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log("agregado a Favorito")}>
              <Text><Ionicons name="heart-outline" size={34} color="crimson" /> </Text>
            </TouchableOpacity>)
          })
        }/>
     </Stack.Navigator>
  )
}

export default ShopNavigator