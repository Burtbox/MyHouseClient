import { Action, Dispatch } from 'redux';
import { IUser } from '../Users/usersInterfaces';

export interface INavProps extends INavStore {
    dispatch: Dispatch<Action>;
}

export interface INavStore {
    loggedInUser: IUser;
    isLoggedIn: boolean;
}

export interface INavState {
    openSidebar: boolean;
}
