import auth from '../../helpers/firebase';
import {  addError } from '../ErrorMessage/errorMessageActions';
import { IUserAuthenticationObject, IUserResponseObject, IRecieveUserAction } from '../Users/usersInterfaces';
import { Action } from 'redux';
import { usersActions } from '../Users/usersActions';

export enum loginActions {
    LOGIN_STARTED = 'LOGIN_STARTED',
    LOGIN_COMPLETED = 'LOGIN_COMPLETED',
}

export function loginUser(login: IUserAuthenticationObject) {
    const request = auth.signInWithEmailAndPassword(login.email, login.password);

    return (dispatch: Function) => {
        dispatch(loginStarted());
        return request
            .then((response: IUserResponseObject) => {
                auth.currentUser.getToken(true).then((idToken: string) => {
                    dispatch(loginSuccessful(response, idToken));
                    dispatch(loginAttemptComplete());
                }).catch((error: Error) => {
                    dispatch(addError(error.message));
                    dispatch(loginAttemptComplete());
                    throw error;
                });
            })
            .catch((error: Error) => {
                dispatch(addError(error.message));
                dispatch(loginAttemptComplete());
                throw error;
            });
    };
}

function loginStarted() {
    const response: Action = {
        type: loginActions.LOGIN_STARTED,
    };
    return response;
}

function loginSuccessful(loginResponse: IUserResponseObject, token: string) {
    const response: IRecieveUserAction = {
        type: usersActions.RECEIVE_USER,
        loggedInUser: {
            token,
            email: loginResponse.email,
            displayName: loginResponse.displayName,
            userId: loginResponse.uid,
        },
        isLoggedIn: true,
    };
    return response;
}

function loginAttemptComplete() {
    const response: Action = {
        type: loginActions.LOGIN_COMPLETED,
    };
    return response;
}
