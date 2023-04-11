import React from 'react'
import CategoryCard from '../category-card'

export default function Directory(props) {
	const { categories } = props
	return (
		<div className="p-2 flex flex-wrap justify-between content-start h-90vh">
			{
				categories.map(category => <CategoryCard {...category}/>)
			}
		</div>
	)
}
