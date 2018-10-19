import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const Menu = props => {
    return (
      <nav>
        <NavLink className="main-anchor" to="/calendar">
          Calendar
        </NavLink>
        <NavLink className="main-anchor" to="/">
          Dashboard
        </NavLink>
      </nav>
    );
  };

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
      <React.Fragment>
        <Route {...rest} render={matchProps => (
          <div className="DefaultLayout">
            <Menu />
            <Component {...matchProps} />
            <div className="Footer">Footer</div>
          </div>
        )} />
      </React.Fragment>
  
    )
  };

  export default DefaultLayout