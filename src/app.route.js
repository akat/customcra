import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
//Layouts
import DefaultLayout from './layouts/DefaultLayout'
import EmptyLayout from './layouts/EmptyLayout'

//Components
import Home from './modules/dashboard'
import Dashboard from './modules/dashboard/routes'
import Calendar from './modules/calendar'
import Login from './modules/login/routes'

const AppRouter = (props) => {
	const loginStatus = props.loginStatus;
	return (
		<Switch>
			<DefaultLayout path="/" exact={true} component={Home} needAuthorization checkAuth={loginStatus}/>
			<DefaultLayout path="/dashboard" component={Dashboard} needAuthorization checkAuth={loginStatus}/>
			<DefaultLayout path="/calendar" component={Calendar} needAuthorization checkAuth={loginStatus}/>
			<EmptyLayout path="/login" component={Login} needAuthorization={false}/>
		</Switch>
	)	
}

const mapStateToProps = state => ({
	...state.user
});

export default withRouter(connect(mapStateToProps)(AppRouter))