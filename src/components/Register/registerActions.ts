import auth from '../../helpers/firebase';
import { usersActions } from '../Users/usersActions';
import { addError } from '../ErrorMessage/errorMessageActions';
import { IUserResponseObject, IRecieveUserAction } from '../Users/usersInterfaces';
import { IUserRegistrationObject, IRegisterUserObject, IRegisterAction } from './registerInterfaces';

export enum registerActions {
    REGISTER_STARTED = 'REGISTER_STARTED',
    REGISTER_COMPLETED = 'REGISTER_COMPLETED',
}

export function registerUser(user: IRegisterUserObject) {
    const request = auth.createUserWithEmailAndPassword(
        user.email,
        user.password,
    );

    return (dispatch: Function) => {
        dispatch(registerStarted());
        return request.then((register: IUserRegistrationObject) => {
            return register
                .updateProfile({ displayName: user.displayName })
                .then((authenticated: IUserResponseObject) => {
                    dispatch(registerSuccessful(authenticated)); // ED! Look at these types more carefully
                    dispatch(registerAttemptComplete());
                })
                .catch((error: Error) => {
                    dispatch(addError(error.message));
                    dispatch(registerAttemptComplete());
                    throw error;
                });
        });
    };
}

function registerStarted() {
    const response: IRegisterAction = {
        type: registerActions.REGISTER_STARTED,
        loading: true,
    };
    return response;
}

function registerSuccessful(registerResponse: IUserResponseObject) {
    const response: IRecieveUserAction = {
        type: usersActions.RECEIVE_USER,
        loggedInUser: {
            email: registerResponse.email,
            displayName: registerResponse.displayName,
            userId: registerResponse.uid,
            token: registerResponse.token,
        },
        isLoggedIn: true,
    };
    return response;
}

function registerAttemptComplete() {
    const response: IRegisterAction = {
        type: registerActions.REGISTER_COMPLETED,
        loading: false,
    };
    return response;
}
