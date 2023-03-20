import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import FavoriteNavigator from './FavoriteNavigator';
import SearchNavigator from './SearchNavigator';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const BottomTab = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
 <BottomTab.Navigator initialRouteName='Shop'
   screenOptions={  ({route})  => ({
      headerShown:false,
      tabBarStyle: styles.tabBar,
      tabBarActiveTintColor: '#d33e4a',
      tabBarIcon: ({focused, color}) => {
         let iconName =''
         switch (route.name){
            case 'ShopTab':
               iconName = focused ? 'home' : 'home-outline' ;
               break
            case 'CartTab':
               iconName = focused ? 'cart' : 'cart-outline';
               break
            case 'FavTab':
               iconName = focused ? 'heart' : 'heart-outline';
               break
            case 'SearchTab':
               iconName = focused ? 'search' : 'search-outline';
               break
         }
         return <Ionicons name = {iconName}  size= {24}  color={color} />
      }
   })}
  >

     <BottomTab.Screen name="ShopTab" component={ShopNavigator} size= {30}
        options={{
         tabBarLabel: 'Home',
         tabBarLabelStyle: styles.txt,
        }}
     />
     <BottomTab.Screen name="FavTab" component={FavoriteNavigator}
         options={{
         tabBarLabel: 'Favorite',
         tabBarLabelStyle: styles.txt,
         }}
     /> 
      <BottomTab.Screen name="CartTab" component={CartNavigator}
         options={{
         tabBarLabel: 'Cart',
         tabBarLabelStyle: styles.txt,
         }}
     /> 
      <BottomTab.Screen name="SearchTab" component={SearchNavigator} size= {30}
         options={{
         tabBarLabel: 'Search',
         tabBarLabelStyle: styles.txt,
         }}
     />
   </BottomTab.Navigator>
  )
}

const styles = StyleSheet.create({
   tabBar:{
      position:"absolute",
      borderTopStartRadius:15,
      borderTopEndRadius:15,
      height:55,
      paddingTop:5,
      paddingBottom: 5,
      backgroundColor:colors.menu,
      borderTopColor: "transparent",
  },
  txt:{
   fontSize:15
  },
})