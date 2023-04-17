import  { configureStore, combineReducers } from "@reduxjs/toolkit"
import userReducer from "./user"
import categoriesReducer from './categories'
import cartReducer from './cartItems'
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from 'redux-thunk'

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['user']
}

const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	cartItems: cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk]
})

export const persistor = persistStore(store)