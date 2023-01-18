import React from "react"
import { View, StyleSheet, Text, Modal as NewModal, TouchableOpacity } from "react-native"

const Modal = ({ isVisible, actionDeleteItem, itemSelected, onDismissModal }) => {
  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalStyle}>
              <TouchableOpacity  onPress={() => actionDeleteItem()} style={styles.btnX}><Text style={styles.txtX}>X</Text></TouchableOpacity>
          <Text style={styles.modalTextStyle}>{itemSelected}</Text>
          <View style={styles.contBtn}>
              <TouchableOpacity onPress={() => onDismissModal(false)} style={styles.btnD} ><Text style={styles.txtD}>Dismiss</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#00000067",
  },
  modalStyle: {
    justifyContent: "center",
    alignItems: "center",
    height:450,
    width:300,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position:'relative',
  },
  modalTextStyle: {
    fontSize: 30,
  },
  txtX:{
    fontSize:20,
    fontWeight:"bold",
  },
  txtD:{
    fontSize:17,
    color:"#fff",
  },
  btnX:{
    position:"absolute",
    top:30,
    right:30,
  },
  btnD: {
    backgroundColor:"lightcoral",
    margin:20,
    borderRadius:15,
    padding:10,
  },
  contBtn:{
    position:"absolute",
    bottom:30,
    flexDirection:"row",
  }
})
