import React from 'react';

import './Form.scss'

const Form = (props) => {
	return (
		<div className="form_wrapper">
			<div className="input_wrapper">
				<label>
					{props.name}
					<input placeholder={props.placeholder} />
				</label>
			</div>
		</div>
	)
}

export default Form;