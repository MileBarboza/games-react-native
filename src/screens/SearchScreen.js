import React from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const SearchScreen = () => {

  return (
    <KeyboardAvoidingView behavior='height'style={{flex:1}}  > 
      <View  style={styles.container}>
        <View  style={styles.inner} >
           <View style={styles.search}>
             <Ionicons name ='search'  size= {24} color={colors.grey}/>
           </View>
           <TextInput style={styles.input}
             placeholder="Search..."
             placeholderTextColor={colors.Tertiary}
             keyboardType="default"
             onInputChange={console.log("search")}
           />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    backgroundColor:colors.background,
  },
  search:{
    position:'absolute',
    top:73,
    left:45,
    zIndex:1
   },
  inner: {
   flexDirection:'row',
  },
  input:{
    flex: 1,
    backgroundColor: '#1d1c1c',
    marginHorizontal:30,
    marginTop:60,
    paddingHorizontal:50,
    paddingVertical:12,
    color:colors.primary,
    fontSize:16,
    borderRadius:10,
    height:50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  }
})
