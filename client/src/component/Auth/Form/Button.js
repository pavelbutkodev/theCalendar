import React from 'react';

const Button = (props) => (
	<div className="btn_wrapper">
		<button className="btn" {...props}>{props.name}</button>
	</div>
);

export default Button;