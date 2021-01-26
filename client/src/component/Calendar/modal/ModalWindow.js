import React from 'react';

import './ModalWindow.scss'
import Form from "./Form";
import Formbutton from "./Formbutton";

const Modal = () => {
	return (
		<div className="modal_form">
			<h2>Хотите создать новое событие?</h2>
			<Form name="Введите описание события"/>
			<Form placeholder="Пример: 28" name="Введите день начала события"/>
			<Form placeholder="Пример: 11" name="Введите месяц начала события"/>
			<Form placeholder="Пример: 2021" name="Введите гол начала события"/>
			<Form placeholder="Пример: 20, 30(20ч 30мин)" name="Введите время начала события"/>
			<Formbutton btnName="отправить"/>
		</div>
	)
}

export default Modal;