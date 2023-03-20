import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/auth.reducer";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer"
import OrderReducer from "./reducers/order.reducer";
import FavoriteReducer from "./reducers/favorite.reducer";
import ProductsReducer from "./reducers/products.reducer"
import ProfileReducer from "./reducers/profile.reducer";

const RootReducer = combineReducers ({
   categories: CategoryReducer,
   products: ProductsReducer,
   cart: CartReducer,
   orders: OrderReducer,
   favorites: FavoriteReducer,
   auth: AuthReducer,
   profile: ProfileReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))