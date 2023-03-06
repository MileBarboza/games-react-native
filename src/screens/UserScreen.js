import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import OrdersScreen from './OrdersScreen'
import { useDispatch } from 'react-redux'
import { Octicons } from '@expo/vector-icons';
import ImageSelector from '../components/ImageSelector'
import { addPlace } from '../store/actions/places.actions'

const UserScreen = () => {
  const dispatch = useDispatch()
  const [image, setImage] = useState()

  const handleSave = () => { 
    dispatch( addPlace( image) )
  }

  return (
    <View style={styles.container}>
      <ImageSelector onImage={setImage}/>
       <TouchableOpacity style={styles.camera}  onPress={handleSave}>
         <Octicons name="check" size={24} color="#999" />
       </TouchableOpacity>
      <OrdersScreen />
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
  },
  perfil:{
    height:130,
    width:130,
    borderRadius:100,
  },
})
