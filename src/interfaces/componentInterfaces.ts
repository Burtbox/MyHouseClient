import { Dispatch } from 'redux';
import { History } from 'history';
import { IUserObject } from '../components/Users/usersInterfaces';

export interface IComponentProps {
    dispatch: Dispatch<Function>;
    history: History;
}

export interface IConnectedComponentProps extends IComponentProps {
    loggedInUser: IUserObject;
    isLoggedIn: boolean;
}
