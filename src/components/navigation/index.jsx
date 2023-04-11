import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/user.context'
import { signoutUser } from '../../utils/firebase'
import Cart from '../cart'
import LogoImage from '../../assets/images/logo.png'

export default function NavigationBar() {
	const { currentUser } = useContext(UserContext)

	async function signOutHandler() {
		await signoutUser()
		cocoMessage.success('Log out successfully', 3000)
	}

	return (
		<div className='select-none flex h-10vh pl-6 pr-12 justify-center text-4xl items-center'>
			<Link to=''>
				<img className='ml-4 h-16 hover:-translate-y-0.5 active:translate-y-0 transition-all' 
				src={LogoImage} alt="logo"/>
			</Link>
			<Link className='ml-auto mr-10 hover:-translate-y-0.5 active:translate-y-0 hover:text-shadow-sm transition-all' to='/shop'>
				shop
			</Link>
			<Link className='mr-10 hover:-translate-y-0.5 hover:text-shadow-sm active:translate-y-0 transition-all' to='/shop/hats'>
				contact
			</Link>
			{
				currentUser ? (
					<>
						<span onClick={signOutHandler} className='cursor-pointer mr-10 hover:-translate-y-0.5 
							hover:text-shadow-sm active:translate-y-0 transition-transform'>log out</span>
						<span className='mr-10 font-extrabold'>
							{ currentUser.displayName }
						</span>
					</>
				) : (
					<Link className='mr-10 hover:-translate-y-0.5 hover:text-shadow-sm active:translate-y-0 transition-all' to='/login'>
						log in
					</Link>
				)
			}
			<Cart/>
		</div>
	)
}
