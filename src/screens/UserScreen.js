import { StyleSheet, View, FlatList} from 'react-native'
import React, { useEffect } from 'react'
import OrdersScreen from './OrdersScreen'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../store/actions/profile.actions'
import Profiletem from '../components/Profiletem'

const UserScreen = () => {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.profile.profile)    

  useEffect(() => {
    console.log("---RESULTADO: ",profile);
  }, [profile]);
  
  useEffect(() => {
    dispatch(loadGames()) 
  }, [])

  const renderItem = ({item}) =>(
    <Profiletem title={item.title} image={item.image}/>
  )

  return (
    <View style={styles.container}>
      <View style={styles.containerProfile}>
        <FlatList style={styles.flat}
          data={profile}
          keyExtractor={item => item.id}
          renderItem={ renderItem }
        />
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
  flat:{
    margin:20,
    height:210,
  },
})
