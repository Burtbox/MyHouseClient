import { LogoutActions, logoutActionTypes } from './logoutActions';
import { ILogoutReducer } from './logoutInterfaces';

function loginReducer(
    state: ILogoutReducer = {
        loggingOut: false,
    },
    action: LogoutActions,
): ILogoutReducer {
    switch (action.type) {
    case logoutActionTypes.LOGOUT_STARTED:
        return {
            ...state,
            loggingOut: true,
        };
    case logoutActionTypes.LOGOUT_COMPLETED:
        return {
            ...state,
            loggingOut: false,
        };
    default:
        return state;
    }
}

export default loginReducer;
