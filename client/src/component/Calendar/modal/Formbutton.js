import React from 'react';

import './Form.scss'

const Formbutton = (props) => {
	return (
		<div className="form_wrapper">
			<div className="btn_wrapper">
				<button className="btn" onClick={() => props.onClick()}>{props.btnName}</button>
			</div>
		</div>
	)
}

export default Formbutton;