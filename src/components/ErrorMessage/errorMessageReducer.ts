import { errorMessageActions } from './errorMessageActions';
import { IErrorMessageState, IErrorMessageAction } from './errorMessageInterfaces';

function errorMessageReducer(
    state: IErrorMessageState = { errorMessageText: null },
    action: IErrorMessageAction,
) {
    switch (action.type) {
    case errorMessageActions.ADD_ERROR:
        return Object.assign({}, state, {
            errorMessageText: action.errorMessageText,
        });
    case errorMessageActions.REMOVE_ERROR:
        return Object.assign({}, state, { errorMessageText: null });
    default:
        return state;
    }
}

// Export Reducer
export default errorMessageReducer;
