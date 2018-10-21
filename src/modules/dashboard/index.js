import React, { Component } from "react";
import { connect } from "react-redux";
import { simpleAction } from "../../store/actions/simpleAction";
import { Link } from "react-router-dom";
import "./css/module.css";

class Dashboard extends Component {
  state = {
    module: "home"
  };

  simpleAction = event => {
    this.props.simpleAction();
  };

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        {/* <button onClick={this.simpleAction}>Test redux action</button>
        <pre>{JSON.stringify(this.props)}</pre> */}
        <nav>
          <Link className="main-anchor" to="/dashboard/demo1">
            demo1
          </Link>
          <Link className="main-anchor" to="/dashboard/demo2">
            demo2
          </Link>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
