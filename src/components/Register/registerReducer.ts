import { registerActions } from './registerActions';
import { IRegisterState, IRegisterAction } from './interfaces';

function registerReducer(
    state: IRegisterState = {
        registerUser: null,
        error: null,
        loading: false,
    },
    action: IRegisterAction,
  ) {
    switch (action.type) {
    case registerActions.REGISTER_STARTED:
        return {
            ...state,
            loading: true,
        };
    case registerActions.REGISTER_COMPLETED:
        return {
            ...state,
            loading: false,
        };
    default:
        return state;
    }
}

export default registerReducer;
