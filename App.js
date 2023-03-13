import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/Navigation/index"
import { Provider } from "react-redux";
import store from "./src/store";
import { init } from "./db";

export default function App() {
  const [loaded] = useFonts({
    Saira: require("./assets/fonts/Saira/Saira-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  init()
  .then(() => console.log("---DataBase initialized"))   
  .catch((err) => {      
    console.log("Database failed")  
    console.log(err.message)
  })

  return (
    <Provider store={store}>  
       <NavigationContainer>
         <MainNavigation/>
       </NavigationContainer>
    </Provider>
  )
}

