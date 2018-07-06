import { ActionsUnion, createAction } from '../../helpers/actionCreator';
import { usersActionTypes } from '../Users/usersActions';
import { IUserResponseObject } from '../Users/usersInterfaces';

export enum registerActionTypes {
    REGISTER_STARTED = 'REGISTER_STARTED',
    REGISTER_COMPLETED = 'REGISTER_COMPLETED',
}

const registerStarted = () => createAction(registerActionTypes.REGISTER_STARTED);
const registerComplete = () => createAction(registerActionTypes.REGISTER_COMPLETED);

const registerSuccessful = (registerResponse: IUserResponseObject) => createAction(usersActionTypes.RECEIVE_USER, {
    loggedInUser: registerResponse,
    isLoggedIn: true,
});

export const RegisterActions = {
    registerStarted,
    registerSuccessful,
    registerComplete,
};

export type RegisterActions = ActionsUnion<typeof RegisterActions>;
