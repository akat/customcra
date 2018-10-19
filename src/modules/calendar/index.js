import React, { Component } from "react";
import { connect } from "react-redux";

import "./css/module.css";

class Calendar extends Component {
  state = {
    module: "home"
  }

  render() {
  	return (
  		<div> Calendar </div>
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
)(Calendar);