import { createStore, combineReducers } from "redux";
import CategoryReducer from "./reducers/category.reducer"
import ProductsReducer from "./reducers/products.reducer"

const RootReducer = combineReducers ({
    categories: CategoryReducer,
    products: ProductsReducer,
})

export default createStore(RootReducer)