import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { BtnAdd } from '../components/Buttons'
import { useSelector } from 'react-redux'

const DetailsScreen = ({navigation, route}) => {
    const bread = useSelector(state => state.products.selected)

  useEffect(() => {
    console.log(route.params)
  }, [])

  return (
     <View style={styles.container}>     
         <Image source= {{uri: bread.img}} style={styles.image} />
       <View style={styles.containerDetail}>
           <Text style={styles.title}>{bread.name}</Text>
           <Text style={styles.descrip}>{bread.description}</Text>
           <Text style={styles.price}>${bread.price}</Text>
             <View style={styles.btn}>
              <BtnAdd txt="ADD" onPress={() =>console.log("Agregar al Carrito") }/>
             </View>
       </View>
     </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    position:"relative"
  },
  containerDetail:{
    flex:1,
    width:"100%",
    height:"35%",
    position:"absolute",
    bottom:0,
    borderTopStartRadius:15,
    borderTopEndRadius:15,
    backgroundColor:"#ccc",
    marginBottom:50,
  },
  image: {
    Width:"80%",
    height: "59%",
  },
  title:{
    fontSize:30,
    fontWeight:"bold",
    paddingTop: 20,
    paddingBottom:8,
    paddingLeft:20
  },
  descrip:{
    textAlign:"center",
    marginHorizontal:20
  },
  price:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold"
  },
  btn: {
    alignItems:"center",
  }
})

