import { Action } from 'redux';
import { IComponentProps } from '../../interfaces/componentInterfaces';
import { ILoggedInUser, IUser } from '../Users/usersInterfaces';

export interface IMyAccountReducer extends IComponentProps, ILoggedInUser {
    editing: boolean;
    deleting: boolean;
}

export interface IMyAccountState {
    userUpdate: IUser;
    userEditing: boolean;
    userEdited: boolean;
    userDeleting: boolean;
    error: Error;
}

export interface IMyAccountAction extends Action {
    editing: boolean;
}

export interface IMyAccountReducerState {
    editing: boolean;
    deleting: boolean;
}
