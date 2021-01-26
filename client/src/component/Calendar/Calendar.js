import React from 'react'

import {Calendar} from 'react-big-calendar'
import events from './events'
import ExampleControlSlot from './ExampleControlSlot'
import localizer from "react-big-calendar/lib/localizers/globalize";
import globalize from 'globalize';
import ModalWindow from "./modal/ModalWindow";

import "react-big-calendar/lib/css/react-big-calendar.css";

const propTypes = {}

const globalizeLocalizer = localizer(globalize)

class Selectable extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			events,
			checkedRadioBtn: true,
			token: localStorage.getItem('token'),
		};
		this.toggleRadioBtn = this.toggleRadioBtn.bind(this);
		this.admin = localStorage.getItem('admin');
	}

	handleSelect = ({start, end}) => {
		const title = window.prompt('New Event name')
		if (title)
			this.setState({
				events: [
					...this.state.events,
					{
						start,
						end,
						title,
					},
				],
			})
	}

	toggleRadioBtn(){
		this.setState({checkedRadioBtn: !this.state.checkedRadioBtn});
	};


// eventStyleGetter = (event) => {
	// 	console.log(event);
	// 	const backgroundColor = '#' + event.hexColor;
	// 	const style = {
	// 		backgroundColor: backgroundColor,
	// 		borderRadius: '0px',
	// 		opacity: 0.8,
	// 		color: 'black',
	// 		border: '0px',
	// 		display: 'block'
	// 	};
	// 	return {
	// 		style: style
	// 	};
	// };

	render() {
		return (
			<div>
				{
					this.admin === 'test@mail.ru' ?
					<div>
						<button onClick={this.toggleRadioBtn}>вызвать модалку</button>
						<div className={`modal_wrapper ${this.state.checkedRadioBtn ? '' : 'active'}`}>
							<ModalWindow active={this.state.checkedRadioBtn}/>
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
					views={['month', 'week', 'day']}
					defaultDate={new Date()}
					defaultView="month"
					style={{height: "100vh"}}
					step={60}
					selectable
					localizer={globalizeLocalizer}
					events={this.state.events}
					// onSelectEvent={event => alert(event.title)}
					onSelectSlot={this.handleSelect}
					// eventPropGetter={(this.eventStyleGetter)}
				/>
			</div>
		)
	}
}

Selectable.propTypes = propTypes

export default Selectable