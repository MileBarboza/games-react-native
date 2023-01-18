import { StyleSheet, TextInput, View, TouchableOpacity,Text } from "react-native"
import React from "react"

const AddItem = ({ onChange, textValue, onAddItem }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Task..."
        style={styles.addItemInput}
        onChangeText={onChange}
        value={textValue}
      />
       <TouchableOpacity onPress={onAddItem}  style={styles.botones}><Text style={styles.txt}>+</Text></TouchableOpacity>
    </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  addItemInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    paddingLeft:25,
    marginRight:8,
    width: "70%",
    height: 45,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  botones:{
    width:55,
    height:55,
    borderRadius: 50,
    padding:15,
    backgroundColor:'lightcoral',
  },
  txt: {
    fontSize:25,
    color:"#fff",
    position:'relative',
    bottom:5,
    left:5
  }
})

