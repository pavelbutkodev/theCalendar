import React from 'react'
import globalize from 'globalize';
import {Calendar} from 'react-big-calendar'

import ExampleControlSlot from './ExampleControlSlot'
import localizer from "react-big-calendar/lib/localizers/globalize";
import ModalWindow from "./modal/ModalWindow";
import {getAll} from "../../services/ajaxUser";

import "react-big-calendar/lib/css/react-big-calendar.css";

const propTypes = {}
const globalizeLocalizer = localizer(globalize)

class Selectable extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			events: localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')).map(event => ({
				...event,
				start: new Date(event.start),
				end: new Date(event.end),
			})) : [],
			abc: [],
			active: true,
			token: localStorage.getItem('token'),
		};
		this.handleModal = this.handleModal.bind(this);
		this.admin = localStorage.getItem('admin');
		this.query = async () => {
			const arr = await getAll()
			return arr
		}
	}

	// handleSelect = ({start, end}) => {
	// 	const title = window.prompt('New Event name')
	// 	if (title)
	// 		this.setState({
	// 			events: [
	// 				...this.state.events,
	// 				{
	// 					start,
	// 					end,
	// 					title,
	// 				},
	// 			],
	// 		})
	// }

	handleModal(){
		this.setState({active: !this.state.active});
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
	rerender(data) {
		this.setState({
			abc: data
		})
	}

	handleChange = (value) => {
		this.setState({
			active: !this.state.active
		})
	}

	componentDidMount() {
		this.query().then((data) => {
				this.rerender(data)
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.state.active !== prevState.active){
			this.query().then((data) => {
				this.rerender(data)
			})
		}
	}

	render() {
		return (
			<div>
				{
					this.admin === 'test@mail.ru' ?
					<div>
						<button onClick={this.handleModal}>вызвать модалку</button>
						<div className={`modal_wrapper ${this.state.active ? '' : 'active'}`}>
							<ModalWindow setActive={this.handleChange}/>
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
					events={this.state.abc}
					onSelectEvent={event => console.log(event)}
					// onSelectSlot={this.handleSelect}
					// eventPropGetter={(this.eventStyleGetter)}
				/>
			</div>
		)
	}
}

Selectable.propTypes = propTypes

export default Selectable