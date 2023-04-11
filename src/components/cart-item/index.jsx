import React from 'react'

export default function CartItem(props) {
	const { imageUrl, name, price, quantity } = props 
	return (
		<div className='grid justify-items-start items-center gap-x-5'
		style={{gridAutoRows: '3.5rem', gridTemplateColumns: '7rem 1fr'}}>
			<img className='h-full row-span-2' src={imageUrl} alt={name}/>
			<span className='w-full text-3xl leading-normal font-semibold overflow-x-hidden whitespace-nowrap text-ellipsis'>{name}</span>
			<span className='text-3xl font-semibold'>{quantity} &times; {price}$</span>
		</div>
	)
}
