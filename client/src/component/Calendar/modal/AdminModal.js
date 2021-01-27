import React, {useCallback, useState} from 'react';

import Formbutton from "./Formbutton";

import './ModalWindow.scss'
import close from "../../../img/close.svg"

const AdminModal = (props) => {

	// const [form, setForm] = useState({
	// 	title: '',
	// 	start: '',
	// 	end: ''
	// });
	//
	// const getEventCall = useCallback(
	// 	(data) => {
	// 		addEvent(data)
	// 			.then((response) => {
	// 				console.log(response)
	// 			})
	// 			.catch((e) => {
	// 				console.log(data)
	// 			})
	// 	}, [])
	//
	// const handleEventClick = () => {
	// 	getEventCall(form)
	// 	props.setActive()
	// }

	const handleClose = () => {
		props.setActive()
	}

	// const handleInputChange = (event, trigger) => {
	// 	setForm((prevState) => (
	// 		{
	// 			...prevState,
	// 			[trigger]: event.target.value
	// 		}
	// 	))
	// }

	return (
		<div className="modal_form">
			<button
				onClick={() => handleClose()}
				className="close">
				<img src={close} alt="close"/>
			</button>
			<h2>Хотите удалить или изменить событие?</h2>
			<Formbutton
				onClick={() => handleClose()}
				btnName="Удалить"
			/>
			<Formbutton
				onClick={() => handleClose()}
				btnName="Изменить"
			/>
		</div>
	)
}

export default AdminModal;