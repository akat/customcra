import React, { Component } from "react";
import { connect } from "react-redux";
import { LogoutAction } from "../../store/reducers/loginReducer";
import "./css/module.css";

class Dashboard extends Component {
  state = {
    module: "home"
  };

  changeLoginStatus = event => {
    this.props.LogoutAction();
  };

  render() {
    const { loginStatus } = this.props;
    return (
      <div>
        <button onClick={this.changeLoginStatus}> Logout </button>
        <h3>User {loginStatus ? ("is Connected") : ("is not Connected")}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch => ({
  LogoutAction: () => dispatch(LogoutAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
