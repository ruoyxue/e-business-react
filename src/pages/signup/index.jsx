import React, {useState} from 'react'
import SignupStyle from './index.module.css'
import { createAuthUserwithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase'
import { useNavigate} from 'react-router-dom'


export default function Signup() {
	const [ formFields, setFormFields ] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})
	const { displayName, email, password, confirmPassword } = formFields
	let navigate = useNavigate()

	function handleChange(event) {
		const { name, value } = event.target
		setFormFields({...formFields, [name]: value})
	}

	async function handleSubmit(event) {
		event.preventDefault()
		if(password !== confirmPassword) {
			cocoMessage.warning("Password Don't Match", 3000);
			return
		}

		try {
			const {user} = await createAuthUserwithEmailAndPassword(email, password)
			await createUserDocumentFromAuth(user, {displayName})
			cocoMessage.success("Successfully Created A New User", 3000)
			setTimeout(() => {
				navigate('/login')
			},1000)
		} catch(err) {
			cocoMessage.error(err.message, 3000)
		}
	}

	function resetFormFields(event) {
		event.preventDefault()
		setFormFields({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		})
	}

	return (
		<div className={SignupStyle.signup}>
			<div className='h-full flex flex-col' style={{width:'55%'}}>
				<span className={SignupStyle.signup__title}>Sign up Now!</span>
				<form onSubmit={handleSubmit} className={SignupStyle.signup__form}>
					<input className={SignupStyle.input_box} type="text" name="displayName" value={displayName} 
						onChange={handleChange} placeholder='Display Name' required/>

					<input className={SignupStyle.input_box} type="email" name="email" 
						value={email} onChange={handleChange} placeholder='Email' pattern=".+@.+\.com" required/>

					<input className={SignupStyle.input_box} type="password" name="password" 
						value={password} onChange={handleChange} placeholder='Password' required/>

					<input className={SignupStyle.input_box} type="password" name="confirmPassword"
						value={confirmPassword} onChange={handleChange} placeholder='Confirm Password' required/>
					
					<div>
					<button type="submit" className={`${SignupStyle.signup__button} mr-12`}>Submit</button>
					<button onClick={resetFormFields} className={SignupStyle.signup__button}>Reset Form</button>
				</div>
			</form>
			</div>
			
		</div>
	)
}
