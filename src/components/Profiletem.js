import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import colors from '../constants/colors'

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
    height:150,
    borderRadius:100,
  },
  name:{
    margin:5,
    fontSize:32,
    textAlign:'center',
    color:colors.primary,
    fontFamily:'Saira'
  }
})