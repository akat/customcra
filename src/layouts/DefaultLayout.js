import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from "react-router-dom";

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