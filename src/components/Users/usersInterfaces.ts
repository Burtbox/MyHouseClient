import { Action } from 'redux';

export interface IUserDetails {
    userId: string;
    token: string;
}

export interface IUser extends IUserDetails {
    email: string;
    displayName: string;
}

export interface IUserAuthenticationObject {
    email: string;
    password: string;
}

export interface IUserResponseObject extends IUserDetails {
    uid: string;
    token: string;
}

export interface IRecieveUserAction extends Action, IUsersReducer { }

export interface IUsersReducer {
    loggedInUser: IUser;
    isLoggedIn: boolean;
}
