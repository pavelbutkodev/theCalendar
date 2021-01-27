import React, {Children} from 'react'
import globalize from 'globalize';
import localizer from "react-big-calendar/lib/localizers/globalize";
import {Calendar} from 'react-big-calendar'

import ExampleControlSlot from './ExampleControlSlot'
import {getAll} from "../../services/ajaxUser";
import ModalWindow from "./modal/ModalWindow";
import AdminModal from "./modal/AdminModal";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.scss"

const propTypes = {}
const globalizeLocalizer = localizer(globalize)

class Selectable extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			events: [],
			active: true,
			token: localStorage.getItem('token'),
			panel: true,
			delete: null
		};
		this.handleModal = this.handleModal.bind(this);
		this.admin = localStorage.getItem('admin');
		this.getEvents = async () => {
			return await getAll()
		}
	}

	handleSelect = (e) => {
		this.setState({
			panel: !this.state.panel
		})
	}

	clickAdd = (e) => {
		this.setState({delete: e.id})
		this.handleSelect()
	}

	eventStyleGetter = () => {
		const backgroundColor = 'rgb(28,173,248)';
		const style = {
			backgroundColor: backgroundColor,
			color: '#fff',
			display: 'block'
		};
		return {
			style: style
		};
	};

	rerender(event) {
		this.setState({
			events: event
		})
	}

	handleModal() {
		this.setState({active: !this.state.active});
	};

	handleChange = (value) => {
		this.setState({
			active: !this.state.active
		})
	}

	componentDidMount() {
		this.getEvents().then((event) => {
			this.rerender(event)
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.active !== prevState.active) {
			this.getEvents().then((event) => {
				this.rerender(event)
			})
		} else if (this.state.panel !== prevState.panel) {
			this.getEvents().then((event) => {
				this.rerender(event)
			})
		}
	}

	render() {
		return (
			<div>
				{
					this.admin === 'test@mail.ru' ?
						<div className="admin_panel">
							<h2 className="head_want">Панель администратора:</h2>
							<button
								className="modal_btn"
								onClick={this.handleModal}
							>
								Создать событие
							</button>
							<div className={`modal_wrapper ${this.state.active ? '' : 'active'}`}>
								<ModalWindow setActive={this.handleChange}/>
							</div>
							<div className={`modal_wrapper ${this.state.panel ? '' : 'active'}`}>
								<AdminModal setActive={this.handleSelect} id={this.state.delete}/>
							</div>
						</div>
						:
						null
				}
				<ExampleControlSlot.Entry waitForOutlet>
					<strong>
						Click an event to see more info, or drag the mouse over the calendar
						to select a date/time range.
					</strong>
				</ExampleControlSlot.Entry>
				<Calendar
					selectable
					views={['month', 'week', 'day']}
					defaultDate={new Date()}
					defaultView="month"
					style={{height: "700px"}}
					step={60}
					localizer={globalizeLocalizer}
					events={this.state.events.map(event => ({
						...event,
						start: new Date(event.start),
						end: new Date(event.end),
					}))}
					onSelectEvent={e => this.clickAdd(e)}
					eventPropGetter={(this.eventStyleGetter)}
				/>
			</div>
		)
	}
}

Selectable.propTypes = propTypes

export default Selectable