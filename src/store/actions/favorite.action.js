export const ADD_FAV = "ADD_FAV"
export const DELETE_FAV = "DELETE_FAV"
export const CLEAR_FAV = "CLEAR_FAV"

export const addFav = (item) =>({
    type: ADD_FAV,
    payload: item,
})

export const deleteFav = (itemFavId) =>({
    type: DELETE_FAV,
    payload: itemFavId
})

export const clearFav = () => ({    
    type: CLEAR_FAV,
})
