import React, {useContext} from 'react'
import { CartContext } from '../../contexts/cart.context'


export default function CheckoutItem(props) {
	const { imageUrl, name, price, quantity } = props 
	const { cartItems, setCartItems } = useContext(CartContext)

	function removeCartItem() {
		let newCartItems = cartItems.filter((item) => {
			return item.name !== name
		})
		setCartItems(newCartItems)
		cocoMessage.success('Successfully remove the item', 1500)
	}

	function incQuantity() {
		cartItems.some((item, index, arr) => {
			if(item.name == name) {
				arr[index].quantity += 1
				return true		
			}
		})
		setCartItems([...cartItems])
	}

	function decQuantity() {
		cartItems.some((item, index, arr) => {
			if(item.name == name) {
				if(arr[index].quantity > 1) {
					arr[index].quantity -= 1
				}
				return true		
			}
		})
		setCartItems([...cartItems])
	}

	return (
		<div className='flex items-center w-full py-6 text-3xl font-normal'>
			<img className='w-1/5' src={imageUrl} alt={name}/>
			<span className='w-2/5 px-8 leading-normal text-center overflow-y-hidden whitespace-nowrap text-ellipsis'>{name}</span>
			<div style={{width: '13.3333333%'}}>
				<div className="select-none flex justify-between mx-auto w-1/2">
					<button className='font-bold active:text-gray-300 transition-all' onClick={decQuantity}>&lt;</button>
					{quantity}
					<button className='font-bold active:text-gray-300 transition-all' onClick={incQuantity}>&gt;</button>
				</div>
			</div>
			<span className="text-center" style={{width: '13.3333333%'}}>{price}</span>
			<button className='font-semibold text-center  active:text-gray-300 transition-all' style={{width: '13.3333333%'}} onClick={removeCartItem}>&times;</button>
		</div>
	)
}
