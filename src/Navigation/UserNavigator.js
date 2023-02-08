import { createNativeStackNavigator } from "@react-navigation/native-stack"
import UserScreen from "../screens/UserScreen"

const Stack = createNativeStackNavigator()

export default UserNavigator = () => {
  return (
    <Stack.Navigator  initialRouteName="User" 
      screenOptions={{
        headerTitleAlign:"center",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
        <Stack.Screen name="User" component={UserScreen}
          options={{ title: "User" }}/>

    </Stack.Navigator>
  )
}
