import React from 'react';
import { Router } from 'react-router-dom';
import Dashboard from './modules/dashboard'
import Calendar from './modules/calendar'
import { createBrowserHistory } from 'history';
import DefaultLayout from './layouts/DefaultLayout'

const history = createBrowserHistory();

export default class AppRouter extends React.Component {
	render(){
		return (
			<Router history={history}>
				<DefaultLayout path="/" exact={true} component={Dashboard}/>
				<DefaultLayout path="/calendar" component={Calendar}/>
			</Router>
		)	
	}
}