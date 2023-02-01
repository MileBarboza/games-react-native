import React, { useState } from "react";
import { useFonts } from "expo-font";
import ShopNavigator from './src/Navigation/ShopNavigator'


export default function App() {
  const [loaded] = useFonts({
    Saira: require("./assets/fonts/Saira/Saira-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return <ShopNavigator/>
}