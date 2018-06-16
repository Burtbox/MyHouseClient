import { History } from 'history';
import { Action, Dispatch } from 'redux';
import { IUserObject } from '../components/Users/usersInterfaces';

export interface IComponentProps {
    dispatch: Dispatch<Action>;
    history: History;
}

// TODO: Will want to tweak this and remove  extends IComponentProps
export interface IConnectedComponentProps extends IComponentProps {
    loggedInUser: IUserObject;
    isLoggedIn: boolean;
}
