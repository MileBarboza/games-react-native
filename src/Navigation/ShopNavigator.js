import React from 'react'
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { BtnBack } from '../components/Buttons';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import UserScreen from '../screens/UserScreen';
import ProfileScreen from '../screens/ProfileScreen';
import colors from '../constants/colors';

const Stack = createNativeStackNavigator();

const ShopNavigator = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Categories" 
     screenOptions={{
       headerStyle: {  backgroundColor: colors.menu},
       headerTitleAlign:"center",
       headerTitleStyle:{
        color: colors.cart,
         fontSize: 30 },
     }}>
        <Stack.Screen name="Categories" component={CategoriesScreen} 
          options={({navigation}) => ({ 
            title: 'Games',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("UserTab")}>
                <Ionicons name="person-circle-outline" size={35} color={colors.grey} />  
              </TouchableOpacity> 
            ),
          })}
        />

        <Stack.Screen name="Products" component={ProductsScreen} 
          options={
            ({route}) => ({ 
              title: route.params.title,
              headerTitleStyle:{
                color: colors.cart,
                fontSize: 25 },
              headerLeft: () => (
                <BtnBack onPress={() => navigation.goBack()} />
              ),
            })
          }
        />
       
        <Stack.Screen name="Details" component={DetailsScreen} 
          options={({ 
            headerStyle: {backgroundColor: "transparent"},
            title:"",
            headerTransparent:true,
            headerLeft: () => (
              <BtnBack onPress={() => navigation.goBack()} />
            ),
            })
          }
        />

      <Stack.Screen name="UserTab" component={UserScreen} 
        options={{
         title: 'Profile',
         headerLeft: () => (
          <BtnBack onPress={() => navigation.goBack()} />
        ),
         headerRight: () => (
           <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
             <AntDesign name="edit" size={27} color={colors.grey}/>
           </TouchableOpacity> 
         )
        }} 
      />

      <Stack.Screen name="Profile" component={ProfileScreen} 
        options={({ 
          headerStyle: {backgroundColor: "transparent",fontSize: 24},
          title:"",
          headerTransparent:true,
          headerLeft: () => (
            <BtnBack onPress={() => navigation.goBack()} />
          )
          })
        }
      />
    </Stack.Navigator>
  )
}

export default ShopNavigator