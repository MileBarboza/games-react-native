import { createNativeStackNavigator } from "@react-navigation/native-stack"
import FavScreen from "../screens/FavScreen"

const Stack = createNativeStackNavigator()

export default FavoriteNavigator = () => {
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
        <Stack.Screen
          name="Fav"
         component={FavScreen}
          options={{
            title: "My Favorite",
          }}
        />
    </Stack.Navigator>
  )
}
