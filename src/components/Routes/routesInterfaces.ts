import { IUserObject } from '../Users/usersInterfaces';

export interface IRoutesProps {
    isLoggedIn: boolean;
    loggedInUser: IUserObject;
}
