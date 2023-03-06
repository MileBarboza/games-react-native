import { DELETE_ORDER, GET_ORDERS } from "../actions/order.action";

const initalState = {
  list: [],
}

const OrderReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
          ...state,
          list: action.payload,
      }
    case DELETE_ORDER:
      return {
          ...state,
          list: state.list.filter(item => item.id !== action.orderId)
      }
    default:
      return state
  }
}

export default OrderReducer