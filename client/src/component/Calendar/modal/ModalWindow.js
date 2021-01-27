import React, {useCallback, useState} from 'react';

import {addEvent} from "../../../services/ajaxUser";
import Form from "./Form";
import Formbutton from "./Formbutton";

import './ModalWindow.scss'
import close from "../../../img/close.svg"

const Modal = (props) => {

	const [form, setForm] = useState({
		title: '',
		start: '',
		end: ''
	});

	const getEventCall = useCallback(
		(data) => {
			addEvent(data)
				.then((response) => {
					console.log(response)
				})
		}, [])

	const handleEventClick = () => {
		getEventCall(form)
		props.setActive()
	}

	const handleClose = () => {
		props.setActive()
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
		<div className="modal_form">
			<button
				onClick={() => handleClose()}
				className="close">
				<img src={close} alt="close"/>
			</button>
			<h2>Want to create a new event?</h2>
			<Form
				value={form.text}
				onChange={(e) => handleInputChange(e, 'title')}
				name="Enter event description"
			/>
			<Form
				type="date"
				value={form.text}
				onChange={(e) => handleInputChange(e, 'start')}
				placeholder="Формат: 2021, 02, 15"
				name="Enter the start date of the event"
			/>
			<Form
				type="date"
				value={form.text}
				onChange={(e) => handleInputChange(e, 'end')}
				placeholder="Формат: 2021, 02, 17"
				name="Enter the end date of the event"
			/>
			<Formbutton
				onClick={() => handleEventClick()}
				btnName="send"
			/>
		</div>
	)
}

export default Modal;