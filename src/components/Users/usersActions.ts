import auth from '../../helpers/firebase';
import { addError } from '../ErrorMessage/errorMessageActions';
import { IUserObject, IRecieveUserAction } from '../Users/usersInterfaces';
import { Action } from 'redux';

export enum usersActions {
    RECEIVE_USER = 'RECEIVE_USER',
    LOGOUT_STARTED = 'LOGOUT_STARTED',
    LOGOUT_COMPLETED = 'LOGOUT_COMPLETED',
}

export function logout() {
    const request = auth.signOut();

    return (dispatch: Function) => {
        dispatch(logoutStarted());
        return request
            .then(() => {
                dispatch(receiveUser(undefined, false));
                dispatch(logoutAttemptComplete());
            })
            .catch((error: Error) => {
                dispatch(addError(error.message));
                dispatch(logoutAttemptComplete());
                throw error;
            });
    };
}

function logoutStarted() {
    const response: Action = {
        type: usersActions.LOGOUT_STARTED,
    };
    return response;
}

function logoutAttemptComplete() {
    const response: Action = {
        type: usersActions.LOGOUT_COMPLETED,
    };
    return response;
}

export function receiveUser(user: IUserObject, isLoggedIn: boolean) {
    const response: IRecieveUserAction = {
        isLoggedIn,
        type: usersActions.RECEIVE_USER,
        loggedInUser: user,
    };
    return response;
}

export default receiveUser;
