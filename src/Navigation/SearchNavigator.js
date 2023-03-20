import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { BtnBack } from "../components/Buttons"
import SearchScreen from "../screens/SearchScreen"
import colors from "../constants/colors"

const Stack = createNativeStackNavigator()

export default SearchNavigator = ({navigation}) => {

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
          headerTintColor: colors.primary,
          headerStyle: {backgroundColor: colors.menu},
          headerLeft: () => (
            <BtnBack onPress={() => navigation.goBack()} color={colors.grey} />
          )
       }}
       />
    </Stack.Navigator>
  )
}
