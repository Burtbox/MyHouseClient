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
              // Add this in to debug V3 api
            //   auth.currentUser.getToken(true).then((idToken: any) => {
            //         // Send token to your backend via HTTPS
            //         // ...
            //       const idTokenCheck = idToken;
            //       console.log(idTokenCheck);
            //   }).catch((error: Error) => {
            //         // Handle error
            //   });
              dispatch(loginSuccessful(response));
              dispatch(loginAttemptComplete());
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

function loginSuccessful(response: IUserResponseObject) {
    return {
        type: RECEIVE_USER,
        payload: {
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