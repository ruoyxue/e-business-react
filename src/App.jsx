import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import NavigationBar from './components/navigation'
import Shop from './pages/shop'
import Login from './pages/login'
import Signup from './pages/signup'
import Checkout from './pages/checkout'

import { useEffect } from 'react'
import { 
	onAuthStateChangedListener, 
	GetUserInfobyUserAuth, 
	createUserDocumentFromAuth 
} from './utils/firebase'
import { useDispatch } from "react-redux";
import { setCurrentUser } from './store/user'
import { setCategories } from './store/categories'
import { getCategoriesAndDocuments } from "./utils/firebase";

export default function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		// user
		const unsubscribe = onAuthStateChangedListener(async (userAuth) => {
			dispatch(setCurrentUser(""))
			if(userAuth) {
				await createUserDocumentFromAuth(userAuth)
				const userInfo = await GetUserInfobyUserAuth(userAuth)
				dispatch(setCurrentUser(userInfo))
			}
		})

		// categories
		const getCategories = async () => {
			const categories = await getCategoriesAndDocuments()
			dispatch(setCategories(categories))
		}
		getCategories()

		return unsubscribe
	}, [])

	return (
		<div>
			<NavigationBar/>
			<div id="route_slot" className='fixed w-screen h-90vh overflow-y-scroll' style={{top: '10vh'}}>
				<Routes>
					<Route index element={<Home/>}/>
					<Route path='shop/*' element={<Shop/>}/>
					<Route path='login' element={<Login/>}/>
					<Route path='signup' element={<Signup/>}/>
					<Route path='checkout' element={<Checkout/>}/>
				</Routes>
			</div>
		</div>
	)
}

