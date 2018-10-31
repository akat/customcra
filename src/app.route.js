import React from 'react';
import { Switch } from 'react-router-dom';
//Layouts
import DefaultLayout from './layouts/DefaultLayout'
import EmptyLayout from './layouts/EmptyLayout'

//Components
import Home from './modules/dashboard'
import Dashboard from './modules/dashboard/routes'
import Calendar from './modules/calendar'
import Login from './modules/login/routes'

const AppRouter = () => {
	const loginStatus = true;
	return (
		<Switch>
			<DefaultLayout path="/" exact={true} component={Home} needAuthorization checkAuth={loginStatus}/>
			<DefaultLayout path="/dashboard" component={Dashboard} needAuthorization checkAuth={loginStatus}/>
			<DefaultLayout path="/calendar" component={Calendar} needAuthorization checkAuth={loginStatus}/>
			<EmptyLayout path="/login" component={Login} needAuthorization={false}/>
		</Switch>
	)	
}

export default AppRouter