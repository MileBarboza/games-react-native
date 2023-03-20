import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import MainNavigation from "./src/Navigation/index"
import store from "./src/store";
import { init } from "./db";

export default function App() {
  const [loaded] = useFonts({
    Saira: require("./assets/fonts/Saira/Saira-Regular.ttf"),
    SairaBold: require("./assets/fonts/Saira/Saira-SemiBold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  init()
  .then(() => console.log("DataBase initialized"))   
  .catch((err) => {      
    console.log(err.message)
  })

  return (
    <Provider store={store}>  
      <StatusBar animated={true} backgroundColor={'transparent'} translucent />
       <NavigationContainer>
         <MainNavigation/>
       </NavigationContainer>
    </Provider>
  )
}
