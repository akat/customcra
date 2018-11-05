import { handleActions } from 'redux-actions';
import user from '../actions/loginActions'

const initialState = {
  ...JSON.parse(localStorage.getItem( 'app')) || { user: { loginStatus : false }},
  isLoading: false
}

const login = (state, action) => {
  localStorage.setItem( 'app', JSON.stringify({
    user: {
      ...action.payload
    }
  }));

  return {
    ...state,
    user: {
      ...action.payload
    }
  }
};

const logout = (state, action) => {
  localStorage.removeItem('app');
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
