import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import Header from "./src/components/Header";
import colors from "./src/constants/colors";
import CartScreen from "./src/screen/CartScreen";
import ProductsScreen from "./src/screen/ProductsScreen";

export default function App() {
  const [loaded] = useFonts({
    Saira: require("./assets/fonts/Saira/Saira-Medium.ttf"),
  });

  const [view, setView] = useState(false);
  const viewCart = () => {
    setView(!view);
  };

  let content = <ProductsScreen />;
  if (view) {
    content = <CartScreen  />;
  }

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Header title={"Games"} view={viewCart} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 10,
  },
  btn: {
    margin: 20,
  },
  containerButton: {
    margin: 60,
  },
});
