import React, { useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import CategoryPreview from '../../components/category-preview'

export default function CategoriesPreview() {
	const { categories } = useContext(CategoriesContext)
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
