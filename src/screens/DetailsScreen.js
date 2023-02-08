import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { BtnAdd } from '../components/Buttons'

const DetailsScreen = ({navigation, route}) => {

  useEffect(() => {
    console.log(route.params)
  }, [])

  return (
     <View style={styles.container}>     
         <Image source= {{uri: route.params.img}} style={styles.image} />
       <View style={styles.containerDetail}>
           <Text style={styles.title}>{route.params.name}</Text>
           <Text style={styles.descrip}>{route.params.description}</Text>
           <Text style={styles.price}>${route.params.price}</Text>
             <BtnAdd txt="ADD" onPress={() => navigation.navigate("Cart") }/>
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
    justifyContent:"center",
    alignItems:"center",
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
  },
  descrip:{
    marginHorizontal:20
  },
  price:{
    fontSize:30,
    fontWeight:"bold"
  },
})

