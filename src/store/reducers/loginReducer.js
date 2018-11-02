export const LoginAction = (payload) => ({
  type: "LOGIN",
  payload
});

export const LogoutAction = (payload) => ({
  type: "LOGOUT",
  payload
});

const initialState = {
  loginStatus: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        ...action.payload
      }
    case "LOGOUT":
      return {
        ...state,
        loginStatus: false
      }
    default:
      return state;
  }
};

export const LOGIN_ACTIONS = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
}
