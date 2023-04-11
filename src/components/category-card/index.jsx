import React from 'react'
import CategoryCardStyle from './index.module.css'
import { useNavigate } from 'react-router-dom'


export default function index(props) {
	const {title, imageURL} = props
	let nagivator = useNavigate()

	function clickHandler() {
		nagivator('/shop/' + title.toLowerCase())
	}

	return (
		<div className={CategoryCardStyle.category} onClick={clickHandler}>
			<div 
				className={CategoryCardStyle.category__image} 
				style={{ backgroundImage: `url(${imageURL})`}}
			/>
			<div className={CategoryCardStyle.category__content}>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	)
}
