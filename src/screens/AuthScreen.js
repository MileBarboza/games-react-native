import { KeyboardAvoidingView, StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native"
import React, { useCallback, useReducer, useEffect } from "react"
import colors from "../constants/colors"
import { useDispatch } from "react-redux"
import { useState } from "react"
import Input from "../components/Input"
import { signUp } from "../store/actions/auth.action"
  
  const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE"
  
  const formReducer = (state, action) => {
    console.log(action)
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
  
    useEffect(() => {
      if (error) {
        Alert.alert("A ocurrido un error", error, [{ text: "Ok" }])
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
  
    const handleSignUp = () => {
      if (formState.formIsValid) {
        dispatch(
          signUp(formState.inputValues.email, formState.inputValues.password)
        )
      } else {
        Alert.alert("formulario inválido", "Ingrese un Email y Password válido", [
          { text: "ok" },
        ])
      }
    }
  
    const onInputChangeHandler = useCallback(
      (inputIdentifier, inputValue, inputValidity) => {
        console.log(inputIdentifier, inputValue, inputValidity)
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
              errorText="Por favor ingrese un email válida"
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
              errorText="Por favor ingrese una contraseña válida"
              onInputChange={onInputChangeHandler}
              initialValue=""
            />
          </View>
          <View style={styles.footer}>
            <View style={styles.button}>
              <TouchableOpacity onPress={handleSignUp} style={styles.btn}>
                <Text style={styles.txtBtn}>Resgister</Text>
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
    container: {
      flex: 1,
      width: "85%",
      maxWidth: 400,
      maxHeight: 400,
      padding: 32,
    },
    footer: {
      marginTop: 42,
    },
    button: {
      marginVertical:15,
      paddingHorizontal:35
    },
    btn:{
      borderRadius:12,
    },
    txtBtn:{
      color: colors.Tertiary,
      fontSize: 13,
      textAlign:"center",
      fontWeight:"bold",
    },
  })
  