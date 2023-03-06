import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/auth.reducer";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer"
import OrderReducer from "./reducers/order.reducer";
import ProductsReducer from "./reducers/products.reducer"
import PlacesReducer from "./reducers/places.reducer";

const RootReducer = combineReducers ({
   categories: CategoryReducer,
   products: ProductsReducer,
   cart: CartReducer,
   orders: OrderReducer,
   auth: AuthReducer,
   places: PlacesReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))