import React, {useContext} from 'react'
import ProductCardStyle from './index.module.css'
import { CartContext } from '../../contexts/cart.context'

export default function ProductCard(props) {
	const { name, imageUrl, price } = props
	const { cartItems, setCartItems } = useContext(CartContext)

	function addCartItem() {
		let newCartItems
		let flag = cartItems.some((item, index, arr) => {
			if(item.name == name) {
				arr[index].quantity += 1
				return true
			}
		})

		if(!flag) {
			let newItem = {imageUrl, name, price, quantity: 1}
			newCartItems = [...cartItems, newItem]
		}
		else {
			newCartItems = [...cartItems]
		}
		
		setCartItems(newCartItems)
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
