import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SearchScreen from "../screens/SearchScreen"

const Stack = createNativeStackNavigator()

export default SearchNavigator = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign:"center",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >

      <Stack.Screen name="Search" component={SearchScreen}
        options={{ title: "Search",
       }}/>

    </Stack.Navigator>
  )
}
