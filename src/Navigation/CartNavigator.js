import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen';
import { BtnBack } from '../components/Buttons';

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
     }}>    
        <Stack.Screen name="Cart" component={CartScreen} options={{
          title:"My Cart",
          headerLeft: () => (
            <BtnBack onPress={() => navigation.goBack()} />
          )
        }} />   
    </Stack.Navigator>
  )
}
