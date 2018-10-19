import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Dashboard from './modules/dashboard'
import Calendar from './modules/calendar'

export default class AppRouter extends React.Component {
	render(){
		return (
			<Router>
				<Route path="/" exact={true} component={Dashboard}/>
				<Route path="/calendar" component={Calendar}/>
			</Router>
		)	
	}
}