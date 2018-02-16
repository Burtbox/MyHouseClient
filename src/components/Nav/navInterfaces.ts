import { Dispatch } from 'redux';
import { IUserObject } from '../Users/usersInterfaces';
    
export interface INavProps extends INavStore {
    dispatch: Dispatch<{}>;
}

export interface INavStore {
    loggedInUser: IUserObject;
    isLoggedIn: boolean;
}
