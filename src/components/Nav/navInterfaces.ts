import { Dispatch } from 'redux';
import { IUser } from '../Users/usersInterfaces';
    
export interface INavProps extends INavStore {
    dispatch: Dispatch<{}>;
}

export interface INavStore {
    loggedInUser: IUser;
    isLoggedIn: boolean;
}
