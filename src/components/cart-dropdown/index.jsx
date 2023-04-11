import React, {useContext} from 'react'
import CartDropdownStyle from './index.module.css'
import CartItem from '../cart-item'
import { CartContext } from '../../contexts/cart.context'
import { Link } from 'react-router-dom'

export default function CartDropdown(props) {
	const {isCartOpen} = props
	const {cartItems} = useContext(CartContext)
	const animationClass = isCartOpen ? CartDropdownStyle.animation__fadeIn : CartDropdownStyle.animation__fadeOut

	return (
		<div tabIndex={121} className={`${CartDropdownStyle.dropdown__box} ${animationClass} box-shadow-lg`}>
			<div className={`${CartDropdownStyle.dropdown__content}`}>
				{
					cartItems.map(item => <div key={item.name}><CartItem {...item}/></div>)
				}
			</div>
			<Link to="/checkout" className={`${CartDropdownStyle['dropdown__button']} box-shadow-sm`}>
				Go to checkout
			</Link>
		</div>
	)
}
