import React from 'react';
import { Route } from 'react-router-dom';

const LoginMainLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className="DashMainLayout">
                <Component {...matchProps} />
            </div>
        )} />
    )
};

export default LoginMainLayout