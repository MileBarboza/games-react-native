import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';

const Stack = createNativeStackNavigator();

export default AuthNavigator = () => {
  return (  
    <Stack.Navigator
      initialRouteName='Auth'
       screenOptions={{
         headerShadow:false,
         title:"",
         headerTransparent:true,
       }} >

        <Stack.Screen name="Login" component={AuthScreen} />

    </Stack.Navigator>
  )
}
