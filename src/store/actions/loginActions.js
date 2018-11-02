import { createAction } from "redux-actions";
import { loginCheck } from "../../../src/modules/api"


export const LoginActionAsync = ({username, pass}) => dispatch => {
    loginCheck({ username, pass}).then((resp, err) => {
        //if (err) return dispatch(LoginAction(err)) TODO::Implement error Handler with Action
        dispatch(LoginAction(resp));
    })
}

const LoginAction = createAction("LOGIN");
const LogoutAction = createAction("LOGOUT");

export default {
  LoginAction,
  LogoutAction
};
