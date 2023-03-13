import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const Profiletem = ({title, image}) => {
    return (
      <View style={styles.placeItem}>
        <Image style={styles.profile} source={{uri: image}}/>
          <Text style={styles.name}> {title} </Text>
      </View>
    )
}

export default Profiletem

const styles = StyleSheet.create({
  placeItem:{
    justifyContent:'center',
    alignItems:'center',
  },
  profile:{
    width:160,
    height:160,
    borderRadius:100,
  },
  name:{
    margin:5,
    fontSize:30,
    textAlign:'center',
  }
})