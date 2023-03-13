import { Image, StyleSheet,Text, View } from 'react-native'
import React, { useEffect } from 'react'
import OrdersScreen from './OrdersScreen'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../store/actions/profile.actions'

const UserScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(`"---RESULTADO: - ${profile} - ${profileName}`);
  }, [profile,profileName]);
  
  useEffect(() => {
    dispatch(loadGames()) 
  }, [])

  const profile = useSelector(state => state.profile.profile)    
  const profileName = useSelector(state => state.profile.profileName)  

  return (
    <View style={styles.container}>
      <View style={styles.containerProfile}>
           <View>
            { profile 
            ?  ( <View><Image style={styles.profile} source={{uri: profile}}/>
                  <Text style={styles.name}> {profileName} </Text></View>) 
            :  (<View><Image style={styles.profile}source={{uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'}}/>
                  <Text style={styles.name}> User </Text></View>)}
           </View>
      </View>
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
  containerProfile:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:30
  },
  profile:{
    width:160,
    height:160,
    borderRadius:100,
  },
  name:{
    marginTop:5,
    fontSize:30,
    textAlign:'center',
 }
})
