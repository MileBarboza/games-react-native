import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer"
import OrderReducer from "./reducers/order.reducer";
import ProductsReducer from "./reducers/products.reducer"

const RootReducer = combineReducers ({
    categories: CategoryReducer,
    products: ProductsReducer,
    cart: CartReducer,
    orders: OrderReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))