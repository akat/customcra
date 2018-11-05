import { createAction } from "redux-actions";
import { Request } from "../../../src/api"


export const LoginActionAsync = ({username, pass}) => dispatch => {
    dispatch(IsLoading(true));
    Request("postLogin", { username, pass}).then((resp, err) => {
        //if (err) return dispatch(LoginAction(err)) TODO::Implement error Handler with Action
        dispatch(LoginAction(resp));
        dispatch(IsLoading(false));
    })
}

const LoginAction = createAction("LOGIN");
const LogoutAction = createAction("LOGOUT");
const IsLoading = createAction("IS_LOADING")

export default {
  LoginAction,
  LogoutAction,
  IsLoading,
};
