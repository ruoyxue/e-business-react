import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card'


export default function Category() {
	const { category } = useParams()
	const { categories } = useContext(CategoriesContext)
	const [ products, setProducts ] = useState(categories[category])

	useEffect(() => {
		setProducts(categories[category])
	}, [category, categories])

	return (
		<div>
			<h1 className='text-6xl font-extrabold mt-4 text-shadow-lg uppercase text-center'>{ category }</h1>
			<div className='grid grid-cols-4 gap-6 p-8' >
				{
					products && products.map(product => <ProductCard key={product.id} {...product}/>)
				}
			</div>
		</div>
	)
}
