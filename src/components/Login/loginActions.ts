import { ActionsUnion, createAction } from '../../helpers/actionCreator';
import { usersActionTypes } from '../Users/usersActions';
import { IUserResponseObject } from '../Users/usersInterfaces';

export enum loginActionTypes {
    LOGIN_STARTED = 'LOGIN_STARTED',
    LOGIN_COMPLETED = 'LOGIN_COMPLETED',
}

const loginStarted = () => createAction(loginActionTypes.LOGIN_STARTED);
const loginCompleted = () => createAction(loginActionTypes.LOGIN_COMPLETED);

const loginSuccessful = (loginResponse: IUserResponseObject) =>
    createAction(usersActionTypes.RECEIVE_USER, {
        loggedInUser: loginResponse,
        isLoggedIn: true,
    });

export const LoginActions = {
    loginStarted,
    loginSuccessful,
    loginCompleted,
};

export type LoginActions = ActionsUnion<typeof LoginActions>;
