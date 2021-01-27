import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
    Redirect,
} from 'react-router-dom';

import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import MyCalendar from '../Calendar/Calendar';
import Exit from "../Auth/Exit";

import './Nav.scss';

const Nav = ({auth}) => {
    return (
        <Router>
            <div className="container_fluid">
                <div className="container">
                    <div className="nav">
                        {auth ?
                            <NavLink to='/exit'>Exit</NavLink>
                            :
                            (
                                <>
                                    <NavLink to="/signin">Sign In</NavLink>
                                    <NavLink to="/signup">Sign Up</NavLink>
                                </>
                            )
                        }
                    </div>
                    <div className="promo">
                        <Switch>
                            <Route path="/exit">
                                <Exit/>
                            </Route>
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
                                {auth ? <Redirect to="/calendar"/> : <Redirect to="/signin"/>}
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Nav;