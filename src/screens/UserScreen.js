import React, { useEffect } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity, Text} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../store/actions/profile.actions'
import OrdersScreen from './OrdersScreen'
import Profiletem from '../components/Profiletem'
import colors from '../constants/colors'

const UserScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.profile.profile)    

  useEffect(() => {
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
      <OrdersScreen style={styles.order}/>
        <View style={styles.contentBtn}>
            <TouchableOpacity onPress={() => navigation.popToTop()}  style={styles.btn}>
              <Text style={styles.txtBtn}>PAY NOW</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    backgroundColor:colors.background,
    position:'relative',
    paddinBottom:100
  },
  flat:{
    margin:20,
    paddingTop:10,
    height:210,
  },
  contentBtn:{
    alignItems:'flex-end',
    marginRight:35
  },
  btn:{
    position:'absolute',
    bottom:63,
    backgroundColor:colors.checkout,
    borderRadius:15,
    paddingHorizontal:20,
    paddingVertical:7,
    width:150,
  },
  txtBtn:{
    color:colors.primary,
    fontWeight:'bold',
    fontSize:16,
    textAlign:'center'
  }
})
