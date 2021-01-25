import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from 'react-router-dom';

import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import MyCalendar from '../Calendar/Calendar';

import './Nav.scss';

const Nav = () => {

	return (
		<Router>
			<div className="container_fluid">
				<div className="container">
					<div className="nav">
						<Link to="/signin">Sign In</Link>
						<Link to="/signup">Sign Up</Link>
					</div>
					<div className="promo">
						<Switch>
							<Route path="/signin">
								<SignIn/>
							</Route>
							<Route path="/signup">
								<SignUp/>
							</Route>
							<Route path="/calendar">
								<MyCalendar/>
							</Route>
							<Route path="/">
								{localStorage.getItem('token') ? <Redirect to="/calendar"/> : <Redirect to="/signin"/> }
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	)
}

export default Nav;