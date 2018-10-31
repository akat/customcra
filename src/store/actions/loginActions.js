const LoginAction = (payload) => dispatch => {
  dispatch({
    type: "LOGIN",
    payload
  });
};

const LogoutAction = (payload) => dispatch => {
  dispatch({
    type: "LOGOUT",
    payload
  });
};


export { LoginAction, LogoutAction }