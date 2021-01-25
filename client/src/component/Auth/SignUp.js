import React, {useCallback, useState} from 'react';

import Input from './Form/Input';
import Button from './Form/Button';
import {registration} from '../../services/ajaxUser';

import './Sign.scss';

const SignUp = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
	})
	const [error, setError] = useState();

	const getApiCall = useCallback(
		(data) => {
			registration(data)
				.then((response) => {
					localStorage.setItem('token', response.token);
					setError('Вы успешно зарегестрировались, теперь совершите вход в систему')
				})
				.catch((e) => {
					setError('Возникла ошибка, возможно вы неверно ввели пароль или email')
				})
		}, [])

	const handleRegisterClick = () => {
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
			<h2>Create an account</h2>
			<div className="wrapper_form">
				<Input
					value={form.name}
					onChange={(e) => handleInputChange(e, 'name')}
					name={'Name'}
					type={'text'}
				/>
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
					onClick={() => handleRegisterClick()}
					name="Register"
				/>
			</div>
		</div>
	);
}

export default SignUp;