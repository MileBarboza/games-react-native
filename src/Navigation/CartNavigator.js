import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';
import CartScreen from '../screens/CartScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default CartNavigator = ({navigation}) => {
  return (  
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign:"center",
        headerShadowVisible:false,
        headerTitleStyle: {
          fontWeight: "bold", 
          headerTitleAlign:"center"
        },
      }} >    
        <Stack.Screen name="Cart" component={CartScreen} options={{
          title:"My Cart",
          headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text> <Ionicons name="arrow-back-outline" size={24} color="black" /></Text>
          </TouchableOpacity>
          )
      }} />   
     </Stack.Navigator>
  )
}
