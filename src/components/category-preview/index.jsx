import React from 'react'
import ProductCard from '../../components/product-card'
import { useNavigate } from 'react-router-dom';

export default function CategoryPreview(props) {
	const { title, category, showCount } = props
	const navigator = useNavigate()
	
	function jumpToCategoryPage() {
		navigator('/shop/' + title)
	}

	return (
		<div className='px-8 pb-8 select-none'>
			<h2 onClick={jumpToCategoryPage} 
			className='cursor-pointer text-6xl font-extrabold ml-2 mb-8 text-shadow-lg uppercase'>
				{ title }
			</h2>
			<div className='grid grid-cols-4 gap-6' >
				{
					category
						.filter((_, index) => index < showCount)
						.map(product => <ProductCard key={product.id} {...product}/>)
				}
			</div>

		</div>
	)
}
