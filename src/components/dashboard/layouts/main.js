import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from "react-router-dom";

const Menu = props => {
    return (
      <nav>
        <Link className="main-anchor" to="/dashboard/demo1">
          Demo1
        </Link>
        <Link className="main-anchor" to="/dashboard/demo2">
          Demo2
        </Link>
      </nav>
    );
  };

const DashMainLayout = ({component: Component, ...rest}) => {
    return (
      <React.Fragment>
        <Route {...rest} render={matchProps => (
          <div className="DashMainLayout">
            <h1>Dashboard</h1>
            <Menu />
            <Component {...matchProps} />
          </div>
        )} />
      </React.Fragment>
    )
  };

  export default DashMainLayout