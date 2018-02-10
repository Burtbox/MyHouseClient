import { Action } from 'redux';

export interface IUserDetailsObject {
    email: string;
    displayName: string;
}

export interface IUserObject extends IUserDetailsObject {
    userId: string;
    token: string;
}

export interface IUserAuthenticationObject {
    email: string;
    password: string;
}

export interface IUserResponseObject extends IUserDetailsObject {
    uid: string;
    token: string;
}

export interface IRecieveUserAction extends Action {
    loggedInUser: IUserObject;
    isLoggedIn: boolean;
}
