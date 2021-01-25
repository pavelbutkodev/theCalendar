import React from 'react';

const Input = (props) => (
	<div className="input_wrapper">
		<label>
			{props.name}
			<input {...props}/>
		</label>
	</div>
);

export default Input;