import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import CategoryPreview from '../../components/category-preview'

export default function CategoriesPreview() {
	const { categories } = useSelector(state => state.categories)
	return (
		<div>
			{
				Object.keys(categories).map((title) => {
					return (
						<div key={title} >
							<CategoryPreview category={categories[title]} title={title} showCount={4}/>
						</div>
					)
				})
			}
		</div>
	)
}
