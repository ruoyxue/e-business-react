import React, {useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { 
	auth, 
	signInWithGooglePopup,
	signInAuthUserwithEmailAndPassword,
} from '../../utils/firebase'
import LoginStyle from './index.module.css'
import GoogleImage from '../../assets/images/google.png'


export default function Login() {
	let emailRef = useRef()
	let passwordRef = useRef()
	let navigate = useNavigate()

	async function LoginWithGoogle(event){
		event.preventDefault();
		try {
			await signInWithGooglePopup()
			cocoMessage.success('Log IN With Google Successfully', 3000)
			navigate('/')
		}
		catch (err) {
			cocoMessage.error(err.message, 3000)
		}
	}

	async function LoginWithEmail(event) {
		event.preventDefault()
		try {
			await signInAuthUserwithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
			emailRef.current.value = ''
			passwordRef.current.value = ''
			cocoMessage.success('Log In Successfully', 3000)
			navigate('/')
		} catch(err) {
			cocoMessage.error(err.message, 3000)
		}
	}

	return (
		<div className={LoginStyle.login}>
			<div className='h-full flex flex-col' style={{width:'55%'}}>
				<span className={LoginStyle.login__title}>Log in Immediately!</span>
				<form onSubmit={LoginWithEmail} className={LoginStyle.login__form}>
					<div className={LoginStyle.form__group}>
						<input className={LoginStyle.form__input} type="email" ref={emailRef}
							placeholder='Email' pattern=".+@.+\.com" required/>
						<label className={LoginStyle.form__label}>Email</label>
					</div>

					<div className={LoginStyle.form__group}>
						<input className={LoginStyle.form__input} type="password" ref={passwordRef}
							placeholder='Password' required/>
						<label className={LoginStyle.form__label}>Password</label>
					</div>
					
					<div className='mt-10 flex justify-center'>
						<button type="submit" className={`${LoginStyle.login__button} mr-6`}>Log In</button>
						<button className={`${LoginStyle.login__button} flex justify-center items-center`} onClick={LoginWithGoogle}>
							<img className='h-6 w-6 mr-4 block opacity-70' src={GoogleImage} alt="google icon" />
							<span>Log In with Google</span>
						</button>
					</div>
					<Link to="/signup" className='-mt-2 text-2xl underline hover:text-green-400 transition-colors -translate-x-16'>Don't have an accout?</Link>
				</form>
			</div>
		</div>
	)
}
