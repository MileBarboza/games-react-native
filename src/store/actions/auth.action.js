import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from "../../constants/Database";

export const SIGNUP = "SIGNUP"
export const SIGNIN = "SIGNIN"

export const signUp = (email, password) => {
  return async dispatch => {
    try {
      const response = await fetch( URL_AUTH_SIGN_UP, {
        method: "POST",    
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            email,
            password,
            returnSecureToken: true,  
        }),
      })

      const data = await response.json()  
      // console.log(data)
      
      dispatch({
          type: SIGNUP,
          token: data.idToken,
          userId: data.localId,
      })
    } catch (error) {
        console.log(error)
    }
  }
}

export const signIn = (email, password) => {
  return async dispatch => {
    try {
      const response = await fetch( URL_AUTH_SIGN_IN, {
        method: "POST",    
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email,
          password,
          returnSecureToken: true,  
        }),
      })

      const data = await response.json()  
      console.log("Aún no te Registraste",data)
      
      dispatch({
        type: SIGNIN,
        token: data.idToken,
        userId: data.localId,
      })
    } catch (error) {
        console.log(error)
    }
  }
}    

