import React, { useState } from "react";
import { StyleSheet, View,TouchableOpacity, Alert, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";

const ImageSelector = (props) => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
        Alert.alert("Insufficient Permissions, You Need Permission to Access the Camera", [{text: "Ok"}])
        return false 
    }
    return true;
  };

  const handleTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    setPickedUri(image.assets[0].uri);
    props.onImage(image.assets[0].uri);
  };


  return (
    <View style={styles.container} >
      <View style={styles.login}>
          { !pickedUri ? (<Image source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'}} style={styles.profile}/>) : (<Image source={{uri: pickedUri}} style={styles.profile}/>) }
      </View> 
        <TouchableOpacity style={styles.camera}  onPress={handleTakeImage}>
          <Ionicons name="md-camera" size={25} color="#7f7f7f" />
        </TouchableOpacity>
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  login:{
    alignItems:"center",
    marginTop:50,
    marginBottom:10,
    position: 'relative'
  },
  profile:{
    height:180,
    width:180,
    borderRadius:100,
  },
  camera: {
    position: 'absolute',
    bottom:25,
    right:45,
    backgroundColor:'#d2d0d0',
    borderRadius:100,
    padding:2,
  },
});




