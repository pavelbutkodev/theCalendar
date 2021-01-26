import React from 'react';

import './Form.scss'

const Formbutton = (props) => {
	return (
		<div className="form_wrapper">
			<div className="btn_wrapper">
				<button className="btn">{props.btnName}</button>
			</div>

		</div>
	)
}

export default Formbutton;