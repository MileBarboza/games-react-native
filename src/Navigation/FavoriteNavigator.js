import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { BtnBack } from "../components/Buttons"
import FavScreen from "../screens/FavScreen"
import colors from "../constants/colors"

const Stack = createNativeStackNavigator()

export default FavoriteNavigator = ({navigation}) => {
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
            headerTintColor: colors.primary,
            headerStyle: {backgroundColor: colors.menu},
            headerLeft: () => (
              <BtnBack onPress={() => navigation.goBack()} color={colors.grey}/>
            )
          }}
        />
    </Stack.Navigator>
  )
}
