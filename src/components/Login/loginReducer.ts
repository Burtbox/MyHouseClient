import { loginActions } from './loginActions';
import { ILoginState, ILoginAction } from './loginInterfaces';

function loginReducer(
  state: ILoginState = {
      user: null,
      error: null,
      loading: false,
  },
  action: ILoginAction,
) {
    switch (action.type) {
    case loginActions.LOGIN_STARTED:
        return {
            ...state,
            loading: true,
        };
    case loginActions.LOGIN_COMPLETED:
        return {
            ...state,
            loading: false,
        };
    default:
        return state;
    }
}

export default loginReducer;
