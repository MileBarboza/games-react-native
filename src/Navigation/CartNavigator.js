import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
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
        <Stack.Screen name="Cart" component={CartScreen} options={{title:"My Cart"}} />   
     </Stack.Navigator>
  )
}
