import {ajaxWrapper} from '../../helpers/ajaxWrapper';
import {urls} from '../../helpers/constant';

export const login = (data) => {
	const url = `${urls.USER}/login`;
	return ajaxWrapper({
		method: 'POST',
		url,
		data,
	}).then(data => data.data)
};

export const registration = (data) => {
	const url = `${urls.USER}/register`;
	return ajaxWrapper({
		method: 'POST',
		url,
		data,
	});
};

export const addEvent = (data) => {
	const url = `${urls.EVENTS}`;
	return ajaxWrapper({
		method: 'POST',
		url,
		data,
	}).then(data => data.data)
};

export const getAll = (data) => {
	const url = `${urls.EVENTS}`;
	return ajaxWrapper({
		method: 'GET',
		url,
		data,
	}).then(data => data.data)
};

export const deleteOne = (id) => {
	const url = `${urls.EVENTS}/${id}`;
	console.log(id)
	return ajaxWrapper({
		method: 'DELETE',
		url,
		data: {id: id}
	}).then(data => data.data)
};

export const changeOne = (id, title) => {
	console.log(id, title)
	const url = `${urls.EVENTS}/${id}`;
	return ajaxWrapper({
		method: 'POST',
		url,
		data: {id: id, title}
	}).then(data => data.data)
};