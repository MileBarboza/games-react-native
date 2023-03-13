import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import colors from '../constants/colors';
import { TouchableOpacity,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import UserScreen from '../screens/UserScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const ShopNavigator = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Categories" 
     screenOptions={{
       headerStyle: {backgroundColor: colors.cart},
       headerTitleAlign:"center",
       headerTitleStyle:{
         fontWeight: "bold",
         fontSize: 24 },
     }}>
        <Stack.Screen name="Categories" component={CategoriesScreen} 
          options={({navigation}) => ({ 
            title: 'Games',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("UserTab")}>
                  <Ionicons name="ios-person-outline" size={27} color="black" /> 
              </TouchableOpacity> 
            )
          })}
        />

        <Stack.Screen name="Products" component={ProductsScreen} 
          options={
            ({route}) => ({ 
              title: route.params.title,
            })
          }
        />
       
        <Stack.Screen name="Details" component={DetailsScreen} 
          options={({ 
            headerStyle: {backgroundColor: "transparent"},
            title:"",
            headerTransparent:true,
            headerTintColor:"crimson",
            })
          }
        />

      <Stack.Screen name="UserTab" component={UserScreen} 
        options={{
         title: 'Profile',
         headerRight: () => (
           <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
             <AntDesign name="edit" size={27} color="black" />
           </TouchableOpacity> 
         )
        }} 
      />

      <Stack.Screen name="Profile" component={ProfileScreen} 
        options={({ 
          headerStyle: {backgroundColor: "transparent"},
          title:"",
          headerTransparent:true,
          })
        }
      />
    </Stack.Navigator>
  )
}

export default ShopNavigator