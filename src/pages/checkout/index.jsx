import React, { Fragment } from 'react'
import CheckoutItem from '../../components/checkout-item'
import { useSelector } from 'react-redux'

export default function Checkout() {
	const { cartItems } = useSelector(state => state.cartItems)
	const PriceTotal = cartItems.reduce((prevTotal, currItem) => prevTotal + currItem.price * currItem.quantity, 0)

	return (
		<div className='flex flex-col justify-between w-8/12 mx-auto'>
			<div className="flex text-3xl font-bold py-6">
				<span className='w-1/5 text-center'>Product</span>
				<span className='w-2/5 text-center'>Description</span>
				<span className='text-center' style={{width: '13.3333333%'}}>Quantity</span>
				<span className='text-center' style={{width: '13.3333333%'}}>Price($)</span>
				<span className='text-center' style={{width: '13.3333333%'}}>Remove</span>
			</div>

			<div className="h-0.5 w-full bg-gray-400"/>
				{
					cartItems.map((item) => {
						return (
							<Fragment key={item.name}>
								<CheckoutItem {...item}/>
								<div className="h-0.5 w-full bg-gray-400"/>
							</Fragment>
						)
					})
				}
			<div className="ml-auto py-6 text-4xl font-normal">
				TOTAL: ${PriceTotal}
			</div>

			<div className="text-center text-red-700 text-3xl py-6">
				* Please use the follwing test credit card for payments *
			</div>
		</div>
	)
}
