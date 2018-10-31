import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginAction, LogoutAction } from "../../store/actions/loginActions";
import "./css/module.css";

class Dashboard extends Component {
  state = {
    module: "home"
  };

  changeLoginStatus = event => {
    this.props.user.loginStatus
      ? this.props.LogoutAction()
      : this.props.LoginAction();
  };

  render() {
    return (
      <div>
        <button onClick={this.changeLoginStatus}>{ this.props.user.loginStatus ? ("Logout") : ("Login") }</button>
        <pre>{JSON.stringify(this.props.user)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  LoginAction: () => dispatch(LoginAction()),
  LogoutAction: () => dispatch(LogoutAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
