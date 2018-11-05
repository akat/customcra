import React from "react";
import { Route, Link, Redirect } from "react-router-dom";

const Menu = props => {
  return (
    <nav>
      <Link className="main-anchor" to="/calendar">
        Calendar
        </Link>
      <Link className="main-anchor" to="/dashboard">
        Dashboard
        </Link>
    </nav>
  );
};

const DefaultLayout = ({ component: Component, ...rest }) => {
  const { needAuthorization, checkAuth } = rest;

  return (
    <React.Fragment>

      <Route {...rest} render={matchProps => (
        <div className="DefaultLayout">
          <Menu />
          {
            needAuthorization && checkAuth  
            ? <Component {...matchProps} />
            : !needAuthorization 
              ? <Component {...matchProps} /> 
              : <Redirect to={{ pathname: '/login', state: { from: matchProps.location }}} />
          }
          <div className="Footer">Footer</div>
        </div>
      )} />
    </React.Fragment>

  )
};

export default DefaultLayout