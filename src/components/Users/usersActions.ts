import { ActionsUnion, createAction } from '../../helpers/actionCreator';
import { IUser } from './usersInterfaces';

export enum usersActionTypes {
    RECEIVE_USER = 'RECEIVE_USER',
}

const receiveUser = (user: IUser, isLoggedIn: boolean) => createAction(usersActionTypes.RECEIVE_USER, {
    isLoggedIn,
    loggedInUser: user,
});

export const UsersActions = {
    receiveUser,
};

export type UsersActions = ActionsUnion<typeof UsersActions>;
