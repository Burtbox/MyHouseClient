import { ActionsUnion, createAction } from '../../helpers/actionCreator';
import { usersActions } from '../Users/usersActions';
import { IUserResponseObject } from '../Users/usersInterfaces';

export enum loginActionTypes {
    LOGIN_STARTED = 'LOGIN_STARTED',
    LOGIN_COMPLETED = 'LOGIN_COMPLETED',
}

const loginStarted = () => createAction(loginActionTypes.LOGIN_STARTED);
const loginCompleted = () => createAction(loginActionTypes.LOGIN_COMPLETED);

const loginSuccessful = (loginResponse: IUserResponseObject, token: string) =>
    createAction(usersActions.RECEIVE_USER, {
        loggedInUser: {
            token,
            email: loginResponse.email,
            displayName: loginResponse.displayName,
            userId: loginResponse.uid,
        },
        isLoggedIn: true,
    });

export const LoginActions = {
    loginStarted,
    loginSuccessful,
    loginCompleted,
};

export type LoginActions = ActionsUnion<typeof LoginActions>;
