import React from 'react';
import { Switch } from 'react-router-dom';
//Layouts
import DefaultLayout from './layouts/DefaultLayout'

//Components
import Home from './modules/dashboard'
import Dashboard from './modules/dashboard/routes'
import Calendar from './modules/calendar'

const AppRouter = () => {
	return (
		<Switch>
			<DefaultLayout path="/" exact={true} component={Home}/>
			<DefaultLayout path="/dashboard" component={Dashboard}/>
			<DefaultLayout path="/calendar" component={Calendar}/>
		</Switch>
	)	
}

export default AppRouter