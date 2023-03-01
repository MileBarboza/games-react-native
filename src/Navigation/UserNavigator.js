import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OrdersScreen from "../screens/OrdersScreen"
import { BtnBack } from "../components/Buttons";

const Stack = createNativeStackNavigator()

export default UserNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="User" 
      screenOptions={{
        headerTitleAlign:"center",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >

      <Stack.Screen name="Orders" component={OrdersScreen}
        options={{ title: "User",
        headerLeft: () => (
          <BtnBack onPress={() => navigation.goBack()} />
          )
       }}/>

    </Stack.Navigator>
  )
}
