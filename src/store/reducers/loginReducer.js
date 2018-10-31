const initialState = {
  loginStatus: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loginStatus: true
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
