import { ADD_ITEM, CONFIRM_CART, REMOVE_ITEM, CLEAR_CART } from "../actions/cart.action"

const INITIAL_STATE = {
  items: [],
  total: 0,
}

const sumTotal = list => 
  list.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const indexItem = state.items.findIndex (
          item => item.id === action.item.id
      )
      if (indexItem === -1) {
          const item = { ...action.item, quantity: 1 }
          const updateCart = [ ...state.items, item]
          return { ...state, items: updateCart, total: sumTotal(updateCart) }
      }
      const items = [...state.items].map(item => {
          if (item.id === action.item.id) item.quantity++
          return item
      })
      return { ...state, items, total: sumTotal(items)}

    case REMOVE_ITEM:
      const clearCart = [...state.items].filter(
          item => item.id !== action.itemId
      )
      return {...state, items: clearCart, total: sumTotal(clearCart)}
    case CLEAR_CART:   
        return INITIAL_STATE    
    case CONFIRM_CART:
        return state
    default:
        return state
  }
}
export default CartReducer