import React from 'react';

import Button from './Form/Button';

import './Sign.scss';

const Exit = () => {
	const handleClickYes = () => {
		localStorage.removeItem('token')
		window.location.href = '/signin'
	}
	const handleClickNo = () => {
		window.location.href = '/calendar'
	}

	return (
		<div className="sign_wrapper">
			<h2>Do you really want to leave?</h2>
			<div className="wrapper_form">
				<Button
					name="Yes"
					onClick={() => handleClickYes()}
				/>
				<Button
					name="No"
					onClick={() => handleClickNo()}
				/>
			</div>
		</div>
	)
};

export default Exit;