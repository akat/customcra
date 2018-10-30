import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const DefaultLayout = ({ component: Component, ...rest }) => {
  const { needAuthorization, checkAuth } = rest;

  return (
      <Route {...rest} render={matchProps => (
        <div className="EmptyLayout">
          {
            needAuthorization && checkAuth  
            ? <Component {...matchProps} />
            : !needAuthorization 
              ? <Component {...matchProps} /> 
              : <Redirect to={{ pathname: '/login', state: { from: matchProps.location }}} />
          }
        </div>
      )} />
  )
};

export default DefaultLayout