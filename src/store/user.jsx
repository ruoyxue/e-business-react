import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
	name: 'user',
	initialState: {
		userInfo: ""
	},
	reducers: {
		setCurrentUser(state, action) {
			return { userInfo: action.payload }
		}
	}
})

export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer
