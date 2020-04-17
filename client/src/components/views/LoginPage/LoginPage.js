import React, {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action'

function LoginPage(props) {

	const dispatch = useDispatch();


	const [Email, setEmail] = useState("")
	const [Password, setPassword] = useState("")

	const onEmailHandler = (event) => {
		setEmail(event.currentTarget.value)
	}

	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value)
	}

	const onSubmitHandler = (event) => {
		event.preventDefault();		//page refresh를 막아줌
		

		let body ={
			email: Email,
			password: Password
		}

		dispatch(loginUser(body))
			.then(response =>{
				if(response.payload.loginSuccess){
					props.history.push('/')
				}else{
					alert('error')
				}
			})
		

		//setSubmit(event.currentTarget.value)
	}


	return (
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'
		, width: '100%', height:'100vh'}}>
			

			<form style={{display:'flex', flexDirection: 'column'}}
				onSubmit={onSubmitHandler}>
					<h1>Login Page</h1><br/><br/>
					<label> Email</label>
					<input type="email" value={Email} onChange={onEmailHandler} />
					<label> Password</label>
					<input type="Password" value={Password} onChange={onPasswordHandler}/>
					<br/>
					<button type ="submit">
						Login
					</button>
			</form>
		</div>
	)
}

export default LoginPage