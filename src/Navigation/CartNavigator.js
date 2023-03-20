import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BtnBack } from '../components/Buttons';
import CartScreen from '../screens/CartScreen';
import colors from '../constants/colors';

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
          headerTintColor: colors.primary,
          headerStyle: {backgroundColor: colors.menu},
          headerLeft: () => (
            <BtnBack onPress={() => navigation.goBack()} color={colors.grey} />
          )
        }} />   
    </Stack.Navigator>
  )
}
