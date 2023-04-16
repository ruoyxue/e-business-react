import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartItems: [],
		cartItemCount: 0
	},
	reducers: {
		addProduct(state, action) {
			const { imageUrl, name, price } = action.payload

			let flag = state.cartItems.some((item, index, arr) => {
				if(item.name == name) {
					arr[index].quantity += 1
					state.cartItemCount += 1
					return true
				}
			})
			
			if(!flag) {
				state.cartItems.push({ imageUrl, name, price, quantity: 1 })
				state.cartItemCount += 1
			}
		}, 

		deleteProduct(state, action) {
			const { imageUrl, name, price, quantity } = action.payload
			let newCartItems = state.cartItems.filter((item) => {
				return item.name !== name
			})
			
			const cartItemCount = newCartItems.reduce((prevTotal, currItem) =>  prevTotal + currItem.quantity, 0)
			return { cartItems: newCartItems, cartItemCount }
		},

		incQuantity(state, action) {
			const { imageUrl, name, price, quantity } = action.payload
			state.cartItems.some((item, index, arr) => {
				if(item.name == name) {
					arr[index].quantity += 1
					return true		
				}
			})
			const cartItemCount = state.cartItems.reduce((prevTotal, currItem) =>  prevTotal + currItem.quantity, 0)
			return { cartItems: [...state.cartItems], cartItemCount }
		},

		decQuantity(state, action) {
			const { imageUrl, name, price, quantity } = action.payload
			state.cartItems.some((item, index, arr) => {
				if(item.name == name) {
					if(arr[index].quantity > 1) {
						arr[index].quantity -= 1
					}
					return true		
				}
			})
			const cartItemCount = state.cartItems.reduce((prevTotal, currItem) =>  prevTotal + currItem.quantity, 0)
			return { cartItems: [...state.cartItems], cartItemCount }
		}
	}
})

export const { addProduct, deleteProduct, incQuantity, decQuantity } = cartSlice.actions
export default cartSlice.reducer
