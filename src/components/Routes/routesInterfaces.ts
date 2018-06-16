import { IUser } from '../Users/usersInterfaces';

export interface IRoutesProps {
    isLoggedIn: boolean;
    loggedInUser: IUser;
}
