import auth from '../../helpers/firebase';
import { RECEIVE_USER } from '../Nav/navActions';
import { ADD_ERROR } from '../ErrorMessage/errorMessageActions';
import { IUserAuthenticationObject, IUserResponseObject } from '../../interfaces/userInterfaces';

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_COMPLETED = 'LOGIN_COMPLETED';

export function loginUser(login: IUserAuthenticationObject) {
    const request = auth.signInWithEmailAndPassword(login.email, login.password);

    return (dispatch: Function) => {
        dispatch(loginStarted());
        return request
            .then((response: IUserResponseObject) => {
                auth.currentUser.getToken(true).then((idToken: any) => {
                    dispatch(loginSuccessful(response, idToken));
                    dispatch(loginAttemptComplete());
                }).catch((error: Error) => {
                    dispatch(loginFailure(error));
                    dispatch(loginAttemptComplete());
                    throw error;
                });
            })
            .catch((error: Error) => {
                dispatch(loginFailure(error));
                dispatch(loginAttemptComplete());
                throw error;
            });
    };
}

function loginStarted() {
    return {
        type: LOGIN_STARTED,
    };
}

function loginSuccessful(response: IUserResponseObject, token: string) {
    return {
        type: RECEIVE_USER,
        payload: {
            token,
            email: response.email,
            displayName: response.displayName,
            userId: response.uid,
        },
        isLoggedIn: true,
    };
}

function loginFailure(error: Error) {
    return {
        type: ADD_ERROR,
        payload: error.message,
    };
}

function loginAttemptComplete() {
    return {
        type: LOGIN_COMPLETED,
    };
}
