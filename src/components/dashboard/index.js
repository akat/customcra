import React, { Component } from "react";
import { connect } from "react-redux";
import user from "../../store/actions/loginActions";
import withLoader from "../../HOComponents/withLoader"

import "./css/module.css";

class Dashboard extends Component {
  state = {
    module: "home"
  };

  changeLoginStatus = event => {
    this.props.LogoutAction();
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <button onClick={this.changeLoginStatus}> Logout </button>
        <h3>User {user.loginStatus ? ("is Connected") : ("is not Connected")}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.app
});

const mapDispatchToProps = dispatch => ({
  LogoutAction: () => dispatch(user.LogoutAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoader(Dashboard));
