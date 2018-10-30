import React from "react";
import LoginMainLayout from "../layouts/main"
import Login from "../index"
import ResetPass from "../components/ResetPass"

const LoginRouter = ({match, location, history}) => {
  return (
    <React.Fragment>
      <LoginMainLayout path={match.url} component={Login} exact/>
      <LoginMainLayout path={`${match.url}/resetpass`} component={ResetPass} exact/>
    </React.Fragment>
  );
};

export default LoginRouter