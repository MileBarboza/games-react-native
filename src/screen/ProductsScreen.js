import React from "react";
import { StyleSheet,Text, View, TouchableOpacity, Image, FlatList } from "react-native";

const products = [
  { id: 'bd7a', img: 'https://www.tierragamer.com/wp-content/uploads/2020/06/valorant-portada.jpg', title: 'First Item', price: '2460' },
  { id: '3ac6', img: "https://cdn1.epicgames.com/salesEvent/salesEvent/c54f6d5f-2a48-41f9-9f36-38a441bdb535_1200x1600-8f81674351d5cbaa78be417ee078a80e", title: 'Second Item', price: '5820' },
  { id: '5869', img:"https://p4.wallpaperbetter.com/wallpaper/105/752/913/ezio-assassins-creed-the-ezio-collection-4k-wallpaper-preview.jpg", title: 'Third Item', price: '4790' },
  { id: 'bd7a', img:'https://static.wikia.nocookie.net/thelastofus/images/f/fe/Portada_Parte_I_limpia.jpeg/revision/latest?cb=20211209015400&path-prefix=es', title: 'Fourth Item', price: '3560' },
  { id: '3acd', img:"https://cdn1.epicgames.com/salesEvent/salesEvent/c54f6d5f-2a48-41f9-9f36-38a441bdb535_1200x1600-8f81674351d5cbaa78be417ee078a80e", title: 'Second Item', price: '2460' },
];

const ProductsScreen = () => {

  const renderItem = ({ item }) => (
    <View style={styles.item}>
       <TouchableOpacity onPress={() => console.log(item)}>
         <Image style={styles.imagen} source={{ uri: item.img }}></Image>
         <Text style={styles.titleProd}>{item.title}</Text>
         <Text style={styles.price}>${item.price}</Text>
       </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <View style={styles.item}>
        <Text style={styles.title}>Games:</Text>
        <FlatList 
          numColumns={2}
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  item: {
    margin: 10,
    paddingVertical: 2,
  },
  titleProd: {
    textAlign: "center",
    fontSize: 20,
  },
  title: {
    textAlign: "center",
    fontFamily: "Saira",
    fontSize: 30,
    paddingHorizontal: 10,
  },
  price: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
  },
  imagen: {
    width: 170,
    height: 200,
    resizeMode: "cover",
  },
});
