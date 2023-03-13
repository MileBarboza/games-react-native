import Profile from '../../models/Profile'
import { ADD_PROFILE, LOAD_PROFILE } from '../actions/profile.actions'

const initialState = {
  profile: []
}

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {      
    case ADD_PROFILE:         
     const  newPlace = new Profile(Date.now(), action.payload.title, action.payload.image)   
     return {
         ...state,
         profile: state.profile.concat(newPlace),
     }
    case LOAD_PROFILE: 
    return {
        ...state,
        profile: action.profile.map(item => new Profile(
          item.id.toString(),
          item.title,
          item.image,
        )),
    }    
    default:
      return state
  }
}

export default ProfileReducer 