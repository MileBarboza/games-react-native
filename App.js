import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/Navigation/index"
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  const [loaded] = useFonts({
    Saira: require("./assets/fonts/Saira/Saira-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>  
       <NavigationContainer>
         <MainNavigation/>
       </NavigationContainer>
    </Provider>
  )
}

