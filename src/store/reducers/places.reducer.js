import { ADD_PLACE } from '../actions/places.actions'
import Place from '../../models/Place'

const initialState = {
   places: []
}

const PlacesReducer = (state = initialState, action) => {
   switch (action.type) {      
      case ADD_PLACE:         
         const  newPlace = new Place(Date.now(), action.payload.title, action.payload.image)   
         return {
            ...state,
            places: state.places.concat(newPlace),
         }
      default:
         return state
   }
}

export default PlacesReducer 