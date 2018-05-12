import auth from '../../helpers/firebase';
import {  addError } from '../ErrorMessage/errorMessageActions';
import receiveUser from '../Users/usersActions';
import { Action } from 'redux';

export enum logoutActions {
    LOGOUT_STARTED = 'LOGOUT_STARTED',
    LOGOUT_COMPLETED = 'LOGOUT_COMPLETED',
}

export function logoutUser() {
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
        type: logoutActions.LOGOUT_STARTED,
    };
    return response;
}

function logoutAttemptComplete() {
    const response: Action = {
        type: logoutActions.LOGOUT_COMPLETED,
    };
    return response;
}
