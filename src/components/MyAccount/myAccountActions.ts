import APIHelper from '../../helpers/apiHelper';
import { usersActions } from '../Users/usersActions';
import { addError } from '../ErrorMessage/errorMessageActions';
import { IUserObject, IRecieveUserAction } from '../Users/usersInterfaces';
import { Action } from 'redux';

export enum myAccountActions {
    EDIT_USER_STARTED = 'EDIT_USER_STARTED',
    EDIT_USER_COMPLETED = 'EDIT_USER_COMPLETED',
    DELETE_USER_STARTED = 'EDIT_USER_STARTED',
    DELETE_USER_COMPLETED = 'EDIT_USER_COMPLETED',
}

export function editUser(token: string, user: IUserObject) {
    const request = APIHelper.apiCall('PUT', 'Users/UpdateUserDetails', token, user);

    return (dispatch: Function) => {
        dispatch(editUserStarted());
        return request
            .then((response: Response) => {
                dispatch(editUserSuccessful(response, user));
                dispatch(editUserAttemptComplete());
            })
            .catch((error: Error) => {
                dispatch(addError(error.message));
                dispatch(editUserAttemptComplete());
                throw error;
            });
    };
}

export function deleteUser(token: string, emailAddress: string) {
    const request = APIHelper.apiCall(
        'DELETE',
        'Users/DeleteUser',
        token,
        null,
        'emailAddress=' + emailAddress,
    );

    return (dispatch: Function) => {
        dispatch(deleteUserStarted());
        return request
            .then((response: Response) => {
                dispatch(deleteUserSuccessful(response));
                dispatch(deleteUserAttemptComplete());
            })
            .catch((error: Error) => {
                dispatch(addError(error.message));
                dispatch(deleteUserAttemptComplete());
                throw error;
            });
    };
}

function editUserStarted() {
    const response: Action = {
        type: myAccountActions.EDIT_USER_STARTED,
    };
    return response;
}

function editUserSuccessful(editUserResponse: Response, user: IUserObject) {
    const response: IRecieveUserAction = {
        type: usersActions.RECEIVE_USER,
        loggedInUser: user,
        isLoggedIn: true,
    };
    return response;
}

function editUserAttemptComplete() {
    const response: Action = {
        type: myAccountActions.EDIT_USER_COMPLETED,
    };
    return response;
}

function deleteUserStarted() {
    const response: Action = {
        type: myAccountActions.DELETE_USER_STARTED,
    };
    return response;
}

function deleteUserSuccessful(deleteUserResponse: Response) {
    const response: IRecieveUserAction = {
        type: usersActions.RECEIVE_USER,
        loggedInUser: undefined,
        isLoggedIn: false,
    };
    return response;
}

function deleteUserAttemptComplete() {
    return {
        type: myAccountActions.DELETE_USER_COMPLETED,
    };
}
