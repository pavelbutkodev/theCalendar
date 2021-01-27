import React, {useCallback, useState} from 'react';

import Formbutton from "./Formbutton";
import {deleteOne, changeOne} from "../../../services/ajaxUser";

import './ModalWindow.scss'
import close from "../../../img/close.svg"

const AdminModal = (props) => {
	const [form, setForm] = useState('');
	const remove = useState(null)
	const [activeChange, setActiveChange] = useState(false)

	const getEventChange = useCallback(
		(data) => {
			changeOne(props.id, data)
				.then((response) => {
					console.log(response)
				})
		}, [props.id])

	const removeOneEvent = useCallback((data) => {
		deleteOne(data)
			.then(data => {
				remove[1](data)
			})
	}, [])

	const clickSendForm = () => {
		getEventChange(form)
	}

	const handleInputChange = (event) => {
		setForm(event.target.value)
	}

	const handleDelete = () => {
		if (props.id) {
			removeOneEvent(props.id)
			props.setActive()
		}
	}

	const handleClose = () => {
		props.setActive()
	}

	const handleChange = () => {
		setActiveChange(!activeChange)
	}

	return (
		<div className="modal_form">
			<button
				onClick={handleClose}
				className="close">
				<img src={close} alt="close"/>
			</button>
			<h2>Хотите удалить или изменить событие?</h2>
			<Formbutton
				onClick={() => handleDelete()}
				btnName="Удалить"
			/>
			<Formbutton
				onClick={() => handleChange()}
				btnName="Редактировать"
			/>
			{
				activeChange ?
					<div className="change_modal">
						<input
							onChange={(e) => handleInputChange(e,)}
							type="text"
							className="input_change"
						/>
						<button
							className="btn_change"
							onClick={clickSendForm}
						>
							Изменить
						</button>
					</div>
					:
					null
			}
		</div>
	)
}

export default AdminModal;