import React from "react";
import Loadable from "react-loadable";
import Loading from "../../../layouts/Loading";

export const LoginMainLayout = Loadable({
	loader: () => import("../layouts/main"),
	loading: Loading,
});

export const Login = Loadable({
	loader: () => import("../index"),
	loading: Loading,
});

export const ResetPass = Loadable({
	loader: () => import("../components/ResetPass"),
	loading: Loading,
});


const LoginRouter = ({match, location, history}) => {
  return (
    <React.Fragment>
      <LoginMainLayout path={match.url} component={Login} exact/>
      <LoginMainLayout path={`${match.url}/resetpass`} component={ResetPass} exact/>
    </React.Fragment>
  );
};

export default LoginRouter