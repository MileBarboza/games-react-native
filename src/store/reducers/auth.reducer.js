import { SIGNIN, SIGNUP } from "../actions/auth.action";

const INITIAL_STATE = {
  token: null,
  userID: null,
}

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        token: action.token, 
        userId: action.userId  
      }
    case SIGNIN:
      return {
          ...state,
          token: action.token, 
          userId: action.userId,
      };
    default:
      return state
  }
}
export default AuthReducer