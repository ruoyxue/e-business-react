import React, { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../../components/categories-preview'
import Category from '../category'


export default function Shop() {
	// const { category } = useParams()
	return (
		<Routes>
			<Route index element={<CategoriesPreview/>}/>
			<Route path=":category" element={<Category/>}/>
		</Routes>
	)
}
