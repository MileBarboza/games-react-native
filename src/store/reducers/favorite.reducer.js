import {  ADD_FAV, CLEAR_FAV, DELETE_FAV } from "../actions/favorite.action"

const INITIAL_STATE = {
    favorites: [],
}

const FavReducer = (state = INITIAL_STATE, action) => {
  const isInFavs = state.favorites.find(fav => fav == action.payload) 
  switch (action.type) {
      case ADD_FAV:
          return isInFavs ? {...state} : {...state, favorites: [...state.favorites, action.payload]}
      case DELETE_FAV: 
      const favListFiltered = state.favorites.filter(fav => fav !== action.payload)
      return { ...state, favorites: favListFiltered}
      case CLEAR_FAV:   
          return INITIAL_STATE
      default:
          return state
  }
}
export default FavReducer