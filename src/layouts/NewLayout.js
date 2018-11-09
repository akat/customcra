import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import { fade } from "@material-ui/core/styles/colorManipulator";

import AppMainBar from "./components/header";
import Menu from "./components/menu";

// const Menu = props => {
//   return (
//     <nav>
//       <Link className="main-anchor" to="/calendar">
//         Calendar
//         </Link>
//       <Link className="main-anchor" to="/dashboard">
//         Dashboard
//         </Link>
//     </nav>
//   );
// };
const drawerWidth = 240;

const styles = theme => ({
  root: {
   display: "flex"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  menu: {
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  }
});

const NewLayout = ({ component: Component, ...rest }) => {
  const { needAuthorization, checkAuth } = rest;

  return (
    <React.Fragment>
      <Route
        {...rest}
        render={matchProps => (
          <div>
            <AppMainBar {...rest} />
            <Menu {...rest}/>
            <main
              className={classNames(rest.classes.content, {
                [rest.classes.contentShift]: true //true must be a variable for menu open / close https://material-ui.com/demos/drawers/
              })}
            >
              <div className={rest.classes.drawerHeader} />
              {needAuthorization && checkAuth 
              ? (<Component {...matchProps} />) 
                : !needAuthorization 
                    ? ( <Component {...matchProps} />) 
                    : ( <Redirect to={{pathname: "/login",state: { from: matchProps.location }}}
                />
              )}
            </main>
          </div>
        )}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  ...state.app
});

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps)(NewLayout)
);
