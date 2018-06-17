import { LoginActions, loginActionTypes } from './loginActions';
import { ILoginReducer } from './loginInterfaces';

function loginReducer(
    state: ILoginReducer = {
        loggingIn: false,
    },
    action: LoginActions,
) : ILoginReducer {
    switch (action.type) {
    case loginActionTypes.LOGIN_STARTED:
        return {
            ...state,
            loggingIn: true,
        };
    case loginActionTypes.LOGIN_COMPLETED:
        return {
            ...state,
            loggingIn: false,
        };
    default:
        return state;
    }
}

export default loginReducer;
