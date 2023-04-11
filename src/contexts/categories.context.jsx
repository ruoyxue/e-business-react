import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data'
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase";


export const CategoriesContext = createContext({
	categories: {},
	setCategories: () => null
})

export function CategoriesProvider({children}) {
	const [ categories, setCategories ] = useState({})

	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA)
	// })
	
	useEffect(() => {
		const getCategories = async () => {
			const categories = await getCategoriesAndDocuments()
			setCategories(categories)
		}
		getCategories()
	}, [])

	const value = { categories }
	
	return (
		<CategoriesContext.Provider value={ value }>
			{ children }
		</CategoriesContext.Provider>
	)
}