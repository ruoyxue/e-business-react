import CartDropdown from "../cart-dropdown";
import React, {useState, useContext} from 'react'
import { CartContext } from "../../contexts/cart.context";

export default function Cart() {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const { cartItems } = useContext(CartContext)
	const cartItemCount = cartItems.reduce((prevTotal, currItem) =>  prevTotal + currItem.quantity, 0)

	function clickHandler() {
		setIsCartOpen(!isCartOpen)
	}

	function closeCartDropdown() {
		setTimeout(() => {
			if(!document.querySelector('#cart').contains(document.activeElement)) {
				setIsCartOpen(false)
			}
		}, 0)
	}

	return (
		<div id="cart" className="relative" onBlur={closeCartDropdown}>
			<div tabIndex={0} onClick={clickHandler} className='relative hover:-translate-y-0.5 active:translate-y-0 transition-transform cursor-pointer'>
				<img className='h-14' src="/src/assets/images/shopping_bag.png" alt="shopping bag" />
				<span className='Z-10 text-2xl font-bold absolute left-1/2 -translate-x-1/2 -translate-y-2/3' style={{top:'70%'}}>
					{ cartItemCount }
				</span>
			</div>
			{
				<CartDropdown isCartOpen={isCartOpen}/>
			}
		</div>
	)
}
