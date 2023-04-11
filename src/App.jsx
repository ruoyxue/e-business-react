import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import NavigationBar from './components/navigation'
import Shop from './pages/shop'
import Login from './pages/login'
import Signup from './pages/signup'
import Checkout from './pages/checkout'
import { UserProvider } from './contexts/user.context.jsx'
import { CategoriesProvider } from './contexts/categories.context'
import { CartProvider } from './contexts/cart.context'


export default function App() {
	return (
		<UserProvider>
			<CategoriesProvider>
				<CartProvider>
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
				</CartProvider>
			</CategoriesProvider>
		</UserProvider>
	)
}

