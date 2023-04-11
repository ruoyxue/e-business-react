import { initializeApp } from 'firebase/app'
import { 
	getAuth, 
	signInWithRedirect, 
	signInWithPopup, 
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,

} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc, collection, WriteBatch, writeBatch,
	query, getDocs
 } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyC7GvEic4aLmxUL6VwEWMAwUOA5tVyVoU0",
	authDomain: "crown-clothing-db-e00af.firebaseapp.com",
	projectId: "crown-clothing-db-e00af",
	storageBucket: "crown-clothing-db-e00af.appspot.com",
	messagingSenderId: "280015438905",
	appId: "1:280015438905:web:bf8e4260f6b4d8fb5679e8",
	measurementId: "G-KV7WDRKVFH"
}

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
	prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey)
	const batch = writeBatch(db)

	objectsToAdd.forEach(element => {
		const docRef = doc(collectionRef, element.title.toLowerCase())
		batch.set(docRef, element)
	})

	await batch.commit()
} 

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories')
	const q = query(collectionRef)
	const querySnapShot = await getDocs(q)
	
	const categoryMap = querySnapShot.docs.reduce((prev, current) => {
		const {title, items} = current.data()
		prev[title.toLowerCase()] = items
		return prev
	}, {})
	
	return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
	const userDocRef = doc(db, 'users', userAuth.uid)
	const userSnapShot = await getDoc(userDocRef)

	if(!userSnapShot.exists()) {
		const { displayName, email } = userAuth
		const createdAt = new Date()
		try {
			await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInfo })
		}
		catch(error) {
			console.log(error.message)
		}
	}
	return userDocRef
}

export const createAuthUserwithEmailAndPassword = async (email, password) => {
	if(!email || !password) return
	return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserwithEmailAndPassword = async (email, password) => {
	if(!email || !password) return
	return await signInWithEmailAndPassword(auth, email, password)
}

export async function GetUserInfobyUserAuth(userAuth) {
	const userDocRef = doc(db, 'users', userAuth.uid)
	const userSnapShot = await getDoc(userDocRef)
	const info = userSnapShot._document.data.value.mapValue.fields
	return {
		createdAt: info.createdAt.timestampValue,
		displayName: info.displayName.stringValue,
		email: info.email.stringValue,
	}
}

export const signoutUser = async() => signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

