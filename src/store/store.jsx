import  {configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"
import categoriesReducer from './categories'
import cartReducer from './cartItems'

const store = configureStore({
	reducer: {
		user: userReducer,
		categories: categoriesReducer,
		cartItems: cartReducer
	}
})

export default store