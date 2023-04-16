import React from 'react'
import ProductCardStyle from './index.module.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/cartItems'


export default function ProductCard(props) {
	const { name, imageUrl, price } = props
	const dispatch = useDispatch()
	
	function addCartItem() {
		dispatch(addProduct({name, imageUrl, price}))
		cocoMessage.success("Add Product Successfully", 1000)
	}
	
	return (
		<div className={ProductCardStyle.product__card}>
			<img className={ProductCardStyle.product__img} src={imageUrl} alt={name}/>
			<span className={ProductCardStyle.product__info}>
				<span>{ name }</span>
				<span>{ price }$</span>
			</span>
			<button className={ProductCardStyle.product__button} onClick={addCartItem}>
				Add to Cart
			</button>
		</div>
	)
}
