import { logoutActions } from './logoutActions';
import { ILogoutState, ILogoutAction } from './logoutInterfaces';

function loginReducer(
  state: ILogoutState = {
      loading: false,
  },
  action: ILogoutAction,
) {
    switch (action.type) {
    case logoutActions.LOGOUT_STARTED:
        return {
            ...state,
            loading: true,
        };
    case logoutActions.LOGOUT_COMPLETED:
        return {
            ...state,
            loading: false,
        };
    default:
        return state;
    }
}

export default loginReducer;
