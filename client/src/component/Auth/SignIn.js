import React, {useCallback, useState} from 'react';

import Input from './Form/Input';
import Button from './Form/Button';
import {login} from '../../services/ajaxUser';

import './Sign.scss';

const SignIn = () => {
	const [form, setForm] = useState({
		email: '',
		password: ''
	})
	const [error, setError] = useState();

	const getApiCall = useCallback(
		(data) => {
			login(data)
				.then((response) => {
					localStorage.setItem('token', response.token);
					localStorage.setItem('admin', response.body);
					window.location.href = '/calendar'
				})
				.catch((e) => {
					setError('Возникла ошибка, возможно вы неверно ввели пароль или email')
				})
		}, [])

	const handleLoginClick = () => {
		getApiCall(form)
	}

	const handleInputChange = (event, trigger) => {
		setForm((prevState) => (
			{
				...prevState,
				[trigger]: event.target.value
			}
		))
	}

	return (
		<div className="sign_wrapper">
			<h2>Log in your account</h2>
			<div className="wrapper_form">
				<Input
					value={form.email}
					onChange={(e) => handleInputChange(e, 'email')}
					name={'Email'}
					type={'email'}
				/>
				<Input
					value={form.password}
					onChange={(e) => handleInputChange(e, 'password')}
					name={'Password'}
					type={'password'}
				/>
				{error && <div className="error">{error}</div>}
				<Button
					name="Login"
					onClick={() => handleLoginClick()}
				/>
			</div>
		</div>
	)
};

export default SignIn;