import { KeyboardAvoidingView, StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native"
import React, { useCallback, useReducer, useEffect } from "react"
import colors from "../constants/colors"
import { useDispatch } from "react-redux"
import { useState } from "react"
import Input from "../components/Input"
import { signIn, signUp } from "../store/actions/auth.action"
  
  const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE"
  
  const formReducer = (state, action) => {
    // console.log(action)
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
        // console.log(inputIdentifier, inputValue, inputValidity)
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
    title: {
      fontSize: 24,
      fontWeight:"bold",
      textAlign:"center",
      margin:15,
      marginBottom:30
    },
    subtitle: {
      fontSize: 17,
      textAlign:"center",
      marginBottom: 18,
    },
    container: {
      flex: 1,
      width: "85%",
      maxWidth: 400,
      maxHeight: 400,
      padding: 32,
    },
    footer: {
      marginTop: 35,
    },
    button: {
      marginVertical:15,
      paddingHorizontal:35
    },
    buttonLogin:{
      backgroundColor:colors.Tertiary,
      borderRadius:12,
      marginBottom:10
    },
    txtBtn:{
      color: colors.Tertiary,
      fontSize: 14,
      textAlign:"center",
      fontWeight:'bold'
    },
    txtBtn2:{
      color: "#fff",
      fontSize: 22,
      textAlign:"center",
      fontWeight:'bold'
    },
  })
  