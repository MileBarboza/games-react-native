import React, { useState } from "react"
import {Button, StyleSheet, View ,Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import Modal from "./src/components/Modal"
import AddItem from "./src/components/AddItem"


export default function App() {

  const [ textItem, setTextItem ] = useState('') 
  const [ list, setList ] = useState([]) 
  const [ itemSelected, setItemSelected ] = useState("")  
  const [ modalVisible, setModalVisible ] = useState(false)  


  const onHandleChangeItem = text => {
    setTextItem(text)
  }

  const addItem = () => {
    if (textItem !== ""){
        setList(prevState => [...prevState, textItem])
        setTextItem("")
      }else {
      Alert.alert("Please type in something")
    }
  }
  
  const empty = () => {
  return setList([])
  }

  const handleModal = item => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const onHandleDelete = item => {
    setList(prevState => prevState.filter(element => element !== item))
    setModalVisible(!modalVisible)
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleModal(item)}  style={styles.renderItemStyle}>
      <Text style={styles.txt}>{item}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Task List</Text>

        <AddItem
          onChange={onHandleChangeItem}
          textValue={textItem}
          onAddItem={addItem}
          onEmpty={empty} /> 
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item}
        />
      </View>

      <Modal
        isVisible={modalVisible}
        itemSelected={itemSelected}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        onDismissModal={setModalVisible}
      />
         <Button title='EMPTY' onPress={empty} color='#863737' style={styles.btn}/> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7EAF2",
    backgroundColor: "#222",
  },
  titleContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  title: {
    textAlign:'center',
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    color: "#fff",
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 40,
    padding: 3,
  },
  renderItemStyle: {
    height: 70,
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "white",
    backgroundColor: "#444",
    borderRadius: 10,
    justifyContent:'space-between',
    justifyContent:'center',
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  txt: {
    color: "#fff",
    fontSize:20,
    fontWeight: 'bold',
  }
})