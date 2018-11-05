import { handleActions } from 'redux-actions';
import user from '../actions/loginActions'

const initialState = {
  user: {
    loginStatus: false
  },
  isLoading: false
}

const login = (state, action) => {
  return {
    ...state,
    user: {
      ...action.payload
    }
  }
};

const logout = (state, action) => {
  return {
    user: { 
      loginStatus: false
    },
    isLoading: false
  }
}

const loading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload
  }
}

export default handleActions({
  [user.LoginAction]: login,
  [user.LogoutAction]: logout,
  [user.IsLoading]: loading,
}, initialState);
