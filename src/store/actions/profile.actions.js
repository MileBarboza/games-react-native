import * as FileSystem from 'expo-file-system'
import { fetchGames, insertGames } from '../../../db'

export const ADD_PROFILE = 'ADD_PROFILE'
export const LOAD_PROFILE = 'LOAD_PROFILE'

export const addProfile = (title, image) => { 
  return async dispatch => {
    const fileName =  image.split('/').pop()
    const Path =   FileSystem.documentDirectory + fileName 

    try {
      FileSystem.moveAsync({
          from: image,
          to: Path
      })

      const result = await insertGames(title, Path );

    } catch (err) {
      console.log(err.message) 
      throw err 
    }                                             
    dispatch({ type: ADD_PROFILE, payload: { title, image: Path}})
  }  
}

export const loadGames = () => {
  return async dispatch => {
      try {
          const result = await fetchGames()    
          dispatch({type: LOAD_PROFILE, profile: result.rows._array})   
      } catch (err) {
        console.log(err.message) 
        throw err 
      }
  }
}