import React, { Component } from "react";
import { connect } from "react-redux";

import "./css/module.css";

class Dashboard extends Component {
  state = {
    module: "home"
  }

  render() {
  	return (
  		<div> Dashboard </div>
  	)
  }

}

const mapStateToProps = state => ({
  ...state
});

// const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
// });

export default connect(
  mapStateToProps
)(Dashboard);