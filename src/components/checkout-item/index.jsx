import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct, incQuantity, decQuantity } from '../../store/cartItems'


export default function CheckoutItem(props) {
	const { imageUrl, name, price, quantity } = props 

	const dispatch = useDispatch()

	function removeCartItem() {
		dispatch(deleteProduct({ imageUrl, name, price, quantity }))
		cocoMessage.success('Successfully remove the item', 1500)
	}

	function increaseQuantity() {
		dispatch(incQuantity({ imageUrl, name, price, quantity }))
	}

	function decreaseQuantity() {
		dispatch(decQuantity({ imageUrl, name, price, quantity }))
	}

	return (
		<div className='flex items-center w-full py-6 text-3xl font-normal'>
			<img className='w-1/5' src={imageUrl} alt={name}/>
			<span className='w-2/5 px-8 leading-normal text-center overflow-y-hidden whitespace-nowrap text-ellipsis'>{name}</span>
			<div style={{width: '13.3333333%'}}>
				<div className="select-none flex justify-between mx-auto w-1/2">
					<button className='font-bold active:text-gray-300 transition-all' onClick={decreaseQuantity}>&lt;</button>
					{quantity}
					<button className='font-bold active:text-gray-300 transition-all' onClick={increaseQuantity}>&gt;</button>
				</div>
			</div>
			<span className="text-center" style={{width: '13.3333333%'}}>{price}</span>
			<button className='font-semibold text-center  active:text-gray-300 transition-all' style={{width: '13.3333333%'}} onClick={removeCartItem}>&times;</button>
		</div>
	)
}
