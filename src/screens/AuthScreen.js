import React, { useCallback, useReducer, useEffect, useState } from "react"
import { KeyboardAvoidingView, StyleSheet, Text, View, Alert, TouchableOpacity, ImageBackground } from "react-native"
import { useDispatch } from "react-redux"
import { signIn, signUp } from "../store/actions/auth.action"
import Input from "../components/Input"
import colors from "../constants/colors"

  const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE"
  
  const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value,
      }
      const updatedValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid,
      }
      let updatedFormIsValid = true
      for (const key in updatedValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
      }
      return {
        inputValues: updatedValues,
        inputValidities: updatedValidities,
        formIsValid: updatedFormIsValid,
      }
    }
    return state
  }
  
  const AuthScreen = () => {
    const dispatch = useDispatch()
    const background = require("../../assets/img/hogwartslegacy.jpg")
    const [error, setError] = useState(null)
    const [isLogin, setIsLogin] = useState(true);
    const loginAction = isLogin ? 'Sign in' : 'Sign up';
    const loginChange = isLogin ? 'Sign up' : 'Sign in';

    useEffect(() => {
      if (error) {
        Alert.alert("An error has occurred", error, [{ text: "Ok" }])
      }
    }, [setError])
  
    const [formState, dispatchFormState] = useReducer(formReducer, {
      inputValues: {
        email: "",
        password: "",
      },
      inputValidities: {
        email: false,
        password: false,
      },
      formIsValid: false,
    })

    const onHandlerAuth = () => {
      if(isLogin){
        if (formState.formIsValid) {
          dispatch(signIn(formState.inputValues.email, formState.inputValues.password))
        } else {
          Alert.alert("Invalid Form", "Email and Password is required", [
            { text: "ok" },
          ])
        }
      } else {
        if (formState.formIsValid) {
          dispatch(signUp(formState.inputValues.email, formState.inputValues.password))
        } else {
          Alert.alert("Invalid Form", "Email and Password is required", [
            { text: "ok" },
          ])
        }
      }  
    }
    
    const handleChangeAuth = () => {
      setIsLogin(!isLogin);
    }
  
    const onInputChangeHandler = useCallback(
      (inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
          type: FORM_INPUT_UPDATE,
          value: inputValue,
          isValid: inputValidity,
          input: inputIdentifier,
        })
      },
      [dispatchFormState]
    )
  
  return (
    <ImageBackground source={background} resizeMode="cover" style={styles.image}>
      <KeyboardAvoidingView
        behavior='height'
        keyboardVerticalOffset={50}
        style={styles.screen}
      >
        <View style={styles.container}>
          <Text style={styles.title}> GAMES</Text>
          <View>
            <Input
              id="email"
              label="Email"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="enter a valid Email"
              onInputChange={onInputChangeHandler}
              initialValue=""
            />
            <Input
              id="password"
              label="Password"
              keyboardType="default"
              required
              password
              secureTextEntry
              autoCapitalize="none"
              errorText="enter a valid Password, must have 6 characters or more"
              onInputChange={onInputChangeHandler}
              initialValue=""
            />
          </View>
          <View style={styles.footer}>
            <View style={styles.button}>
              <TouchableOpacity onPress={onHandlerAuth} style={styles.buttonLogin}>
                 <Text style={styles.txtBtn2}>{loginAction}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleChangeAuth} style={styles.btn}>
                 <Text style={styles.txtBtn}>{loginChange}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}
  
  export default AuthScreen
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position:'relative',
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      width:'100%',
      height:'100%',
    },
    title: {
      fontSize: 40,
      textAlign:"center",
      color:colors.primary,
      fontFamily:'SairaBold',
      marginBottom:5,
      textShadowColor: "#00000076",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 4,
    },
    subtitle: {
      fontSize: 17,
      textAlign:"center",
      marginBottom: 18,
    },
    container: {
      backgroundColor:"#83828275",
      width: "85%",
      maxHeight: 430,
      padding: 40,
      borderRadius:12,
    },
    footer: {
      marginTop: 35,
    },
    button: {
      marginVertical:15,
      paddingHorizontal:35
    },
    buttonLogin:{
      backgroundColor:"#558988",
      borderRadius:12,
      marginBottom:10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    txtBtn:{
      color:"#5f9695",
      fontSize: 15,
      textAlign:"center",
      fontFamily:'SairaBold',
      textShadowColor: "#00000076",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 4,
      paddingTop:10,
    },
    txtBtn2:{
      color: "#fff",
      fontSize: 23,
      textAlign:"center",
      fontFamily:'SairaBold',
      textShadowColor: "#00000076",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 4,
    },
  })
  