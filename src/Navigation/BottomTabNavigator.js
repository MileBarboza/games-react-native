import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import FavoriteNavigator from './FavoriteNavigator';
import UserNavigator from './UserNavigator';
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
 <BottomTab.Navigator initialRouteName='Shop'
   screenOptions={  ({route})  => ({
      headerShown:false,
      tabBarStyle: styles.tabBar,
      tabBarIcon: ({focused}) => {

         let iconName =''
         switch (route.name){
            case 'ShopTab':
               iconName = focused ? 'home' : 'home-outline' ;
               break
            case 'CartTab':
               iconName = focused ? 'cart' : 'cart-outline';
               break
            case 'UserTab':
               iconName = focused ? 'person-sharp' : 'ios-person-outline';
               break
            case 'FavTab':
               iconName = focused ? 'heart' : 'heart-outline';
               break
         }
         return <Ionicons name = {iconName}  size= {24}  color="black" />
      }
   })}
  >

     <BottomTab.Screen name="ShopTab" component={ShopNavigator} size= {30}
        options={{
           tabBarLabel:() =>(
              <Text>Home</Text>
           ),
        }}
     />
     <BottomTab.Screen name="FavTab" component={FavoriteNavigator}
         options={{
            tabBarLabel:() =>(
             <Text>Favorite</Text>
            ),
         }}
     /> 
      <BottomTab.Screen name="CartTab" component={CartNavigator}
         options={{
            tabBarLabel:() =>(
             <Text>Cart</Text>
            ),
         }}
     /> 
     <BottomTab.Screen name="UserTab" component={UserNavigator} size= {30}
         options={{
            tabBarLabel:() =>(
               <Text>User</Text>
            ),
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
  },
})