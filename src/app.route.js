import React from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import Loadable from "react-loadable";
import Loading from "./layouts/Loading";

//Layouts
import DefaultLayout from "./layouts/DefaultLayout"
import EmptyLayout from "./layouts/EmptyLayout"

//Components
export const Home = Loadable({
	loader: () => import("./components/dashboard"),
	loading: Loading,
});

export const Dashboard = Loadable({
	loader: () => import("./components/dashboard/routes"),
	loading: Loading,
});

export const Calendar = Loadable({
	loader: () => import("./components/calendar"),
	loading: Loading,
});

export const Login = Loadable({
	loader: () => import("./components/login/routes"),
	loading: Loading,
});

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