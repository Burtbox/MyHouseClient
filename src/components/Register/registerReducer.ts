import { RegisterActions, registerActionTypes } from './registerActions';
import { IRegisterReducer } from './registerInterfaces';

function registerReducer(
    state: IRegisterReducer = {
        registering: null,
    },
    action: RegisterActions,
): IRegisterReducer {
    switch (action.type) {
    case registerActionTypes.REGISTER_STARTED:
        return {
            ...state,
            registering: true,
        };
    case registerActionTypes.REGISTER_COMPLETED:
        return {
            ...state,
            registering: false,
        };
    default:
        return state;
    }
}

export default registerReducer;
