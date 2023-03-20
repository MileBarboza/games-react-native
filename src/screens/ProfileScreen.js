import React, { useState } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { addProfile } from '../store/actions/profile.actions'
import ImageSelector from '../components/ImageSelector'
import colors from '../constants/colors'

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('') 
  const [image, setImage] = useState( )

  const handleSave = () => {    
    dispatch(addProfile(title, image))    
    navigation.navigate("UserTab")    
  }

  return (
     <View style={styles.container}>
      <View  style={styles.containerUser}>
        <ImageSelector onImage={setImage}/>
        <TextInput style={styles.input} keyboardType="default"  onChangeText={setTitle}  placeholder="Username..." placeholderTextColor={colors.Tertiary}/>
          <TouchableOpacity style={styles.save}  onPress={handleSave}>
            <Text style={styles.saveTxt}>Guardar Cambio</Text>
          </TouchableOpacity>
      </View>
     </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor:colors.background
   },
   containerUser: {
     flex: 1,
     marginTop:80,
     alignItems:'center',
   },
   label:{
     fontSize:18,
     marginBottom:16
   },
   input:{
     borderBottomColor:"#525252",
     borderBottomWidth:1,
     marginBottom:16,
     paddingHorizontal:2,
     paddingTop:4,
     width:150,
     textAlign:'center',
     color:colors.Tertiary,
     fontSize:16
   },
  save:{
    backgroundColor:'lightgrey',
    paddingVertical:5,
    paddingHorizontal:5,
    borderRadius:10,
    width:200,
    marginTop:30,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.64,
    shadowRadius: 2.62,
    elevation: 7,
  },
  saveTxt:{
    textAlign:'center'
  }
})