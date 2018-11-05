import React from 'react';
import { Switch } from 'react-router-dom';
import { connect } from "react-redux";
//Layouts
import DefaultLayout from './layouts/DefaultLayout'
import EmptyLayout from './layouts/EmptyLayout'

//Components
import Home from './components/dashboard'
import Dashboard from './components/dashboard/routes'
import Calendar from './components/calendar'
import Login from './components/login/routes'

const AppRouter = ({ loginStatus }) => {
	return (
		<Switch>
			<DefaultLayout path="/" exact={true} component={Home} needAuthorization checkAuth={loginStatus}/>
			<DefaultLayout path="/dashboard" component={Dashboard} needAuthorization checkAuth={loginStatus}/>
			<DefaultLayout path="/calendar" component={Calendar} needAuthorization checkAuth={loginStatus}/>
			<EmptyLayout path="/login" component={Login} />
		</Switch>
	)	
}

const mapStateToProps = state => ({
	...state.app.user
});

export default connect(mapStateToProps)(AppRouter)