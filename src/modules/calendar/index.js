import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/module.css";

class Calendar extends Component {
  state = {
    module: "home"
  };

  render() {
    return (
      <div>
        <h1>Calendar</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Calendar);
