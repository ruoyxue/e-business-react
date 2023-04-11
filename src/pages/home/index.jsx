import Directory from "../../components/directory";

export default function Home() {
	const categories = [
		{
			key: 1,
			title: 'Hats',
			imageURL: 'https://i.ibb.co/cvpntL1/hats.png'
		},
		{
			key: 2,
			title: 'Jackets',
			imageURL: 'https://i.ibb.co/px2tCc3/jackets.png'
		},
		{
			key: 3,
			title: 'Sneakers',
			imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png'
		},
		{
			key: 4,
			title: 'Womens',
			imageURL: 'https://i.ibb.co/GCCdy8t/womens.png'
		},
		{
			key: 5,
			title: 'Mens',
			imageURL: 'https://i.ibb.co/R70vBrQ/mens.png'
		}
	]
	return <Directory categories={categories}/>
}