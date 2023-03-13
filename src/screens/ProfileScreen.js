import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput,TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import ImageSelector from '../components/ImageSelector'
import { addProfile } from '../store/actions/profile.actions'

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('') 
  const [image, setImage] = useState( )

  const handleSave = () => {    
    dispatch(addProfile(title, image))    
    navigation.navigate("UserTab")    
  }

  return (
    <ScrollView> 
       <View style={styles.container}>
         <ImageSelector onImage={setImage}/>
         <TextInput style={styles.input}  onChangeText={setTitle}  placeholder="Username..."/>
            <TouchableOpacity style={styles.save}  onPress={handleSave}>
                <Text style={styles.saveTxt}>Guardar Cambio</Text>
            </TouchableOpacity>
       </View>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
 container: {
    flex: 1,
    margin:50,
    justifyContent:'center',
    alignItems:'center'
 },
 label:{
    fontSize:18,
    marginBottom:16
 },
 input:{
    borderBottomColor:"#ccc",
    borderBottomWidth:1,
    marginBottom:16,
    paddingHorizontal:2,
    paddingTop:4,
    width:150,
    textAlign:'center'
 },
 save:{
    backgroundColor:'lightgrey',
    padding:2,
    paddingHorizontal:5,
    borderRadius:10,
    width:200,
    marginTop:30,
 },
 saveTxt:{
    textAlign:'center'
 }
})