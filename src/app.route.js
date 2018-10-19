import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//Layouts
import DefaultLayout from './layouts/DefaultLayout'

//Components
import Dashboard from './modules/dashboard'
import Calendar from './modules/calendar'

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