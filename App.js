import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/Navigation/BottomTabNavigator";


export default function App() {
  const [loaded] = useFonts({
    Saira: require("./assets/fonts/Saira/Saira-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  )
}
