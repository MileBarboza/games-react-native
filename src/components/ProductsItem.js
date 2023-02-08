import {  StyleSheet, TouchableOpacity, Text, Image } from 'react-native'

const ProductsItem = ({item, onSelected}) => {

  return (
    <TouchableOpacity onPress={() => onSelected(item)} style={styles.container}>
        <Image source= {{uri: item.img}} style={styles.image}/>
          <Text style={styles.titleProd}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  )
}

export default ProductsItem

const styles = StyleSheet.create({
  container: {
    flex:1/2,
    margin: 10,
    paddingVertical: 3,
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
    paddingLeft: 10,
  },
  image: {
    maxWidth:175,
    height: 200,
    borderRadius: 4,
    resizeMode: "cover",
  },
})