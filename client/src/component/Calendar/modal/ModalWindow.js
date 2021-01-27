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
			<h2>Хотите создать новое событие?</h2>
			<Form
				value={form.text}
				onChange={(e) => handleInputChange(e, 'title')}
				name="Введите описание события"
			/>
			<Form
				type="date"
				value={form.text}
				onChange={(e) => handleInputChange(e, 'start')}
				placeholder="Формат: 2021, 02, 15"
				name="Введите дату начала события"
			/>
			<Form
				type="date"
				value={form.text}
				onChange={(e) => handleInputChange(e, 'end')}
				placeholder="Формат: 2021, 02, 17"
				name="Введите дату окончания события"
			/>
			<Formbutton
				onClick={() => handleEventClick()}
				btnName="отправить"
			/>
		</div>
	)
}

export default Modal;