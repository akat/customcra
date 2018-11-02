import { handleActions } from 'redux-actions';
import user from '../actions/loginActions'

const initialState = {
  loginStatus: false
}

const login = (state, action) => {
  return {
    ...state,
    ...action.payload
  }
};

const logout = (state, action) => {
  return {
    loginStatus: false
  }
}

export default handleActions({
  [user.LoginAction]: login,
  [user.LogoutAction]: logout,
}, initialState);
