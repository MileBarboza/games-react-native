import { ADD_PROFILE, LOAD_PROFILE } from '../actions/profile.actions'

const initialState = {
  profile: null,
  profileName: null
}

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {      
    case ADD_PROFILE:         
      return {
        ...state,
        profile: action.payload.image, 
        profileName: action.payload.title,
      }


    case LOAD_PROFILE: 
    return {
        ...state,
        profile: action.profile.image,
        profileName: action.profileName.title
    }    

    default:
      return state
  }
}

export default ProfileReducer 